import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { actions, isInputError } from "astro:actions";

gsap.registerPlugin(ScrollTrigger);

let mm: gsap.MatchMedia | undefined;

function setupMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    toggle?.addEventListener("click", () => {
        const open = menu?.classList.toggle("hidden") === false;
        toggle.setAttribute("aria-expanded", String(open));
    });

    const header = document.getElementById("site-header");
    ScrollTrigger.create({
        start: 40,
        onToggle: (self) =>
            header?.classList.toggle(
                "shadow-[0_8px_30px_-18px_rgb(24_35_45/0.35)]",
                self.isActive,
            ),
    });
}

function setupAnimations() {
    mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
        const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero] > *");
        if (heroItems.length) {
            hero.from(heroItems, {
                y: 28,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
            });
        }
        const visual = document.querySelector("[data-hero-visual]");
        if (visual) {
            hero.from(
                visual,
                { scale: 0.96, opacity: 0, duration: 1, ease: "power2.out" },
                0.15,
            );
            gsap.to(visual.querySelector("img"), {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                    trigger: visual,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }

        gsap.utils
            .toArray<HTMLElement>("[data-reveal],[data-stagger],[data-count]")
            .forEach((el) => {
                if (el.hasAttribute("data-stagger")) {
                    gsap.from(el.children, {
                        y: 32,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            once: true,
                        },
                    });
                } else if (el.hasAttribute("data-count")) {
                    const state = { v: 0 };
                    gsap.to(state, {
                        v: Number(el.dataset.count),
                        duration: 1.4,
                        ease: "power2.out",
                        onUpdate: () =>
                            (el.textContent = String(Math.round(state.v))),
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            once: true,
                        },
                    });
                } else {
                    gsap.from(el, {
                        y: 36,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            once: true,
                        },
                    });
                }
            });
    });
}

function setupFaq() {
    const faqItems =
        document.querySelectorAll<HTMLDetailsElement>("[data-faq] details");
    faqItems.forEach((item) => {
        const summary = item.querySelector("summary");
        const panel = item.querySelector<HTMLElement>("[data-faq-panel]");
        if (!summary || !panel) return;
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        summary.addEventListener("click", (event) => {
            event.preventDefault();
            if (!item.open) {
                faqItems.forEach(
                    (other) =>
                        other !== item &&
                        other.open &&
                        other.querySelector("summary")?.click(),
                );
                item.open = true;
                if (reduced) ScrollTrigger.refresh();
                else
                    gsap.fromTo(
                        panel,
                        { height: 0, opacity: 0 },
                        {
                            height: "auto",
                            opacity: 1,
                            duration: 0.35,
                            ease: "power2.out",
                            clearProps: "height",
                            onComplete: () => ScrollTrigger.refresh(),
                        },
                    );
            } else if (reduced) {
                item.open = false;
                ScrollTrigger.refresh();
            } else {
                gsap.to(panel, {
                    height: 0,
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => {
                        item.open = false;
                        gsap.set(panel, { clearProps: "height,opacity" });
                        ScrollTrigger.refresh();
                    },
                });
            }
        });
    });
}

function setupFilters() {
    const filters =
        document.querySelectorAll<HTMLButtonElement>("[data-filter]");
    const reviews = document.querySelectorAll<HTMLElement>("[data-review]");
    filters.forEach((btn) => {
        btn.addEventListener("click", () => {
            const value = btn.dataset.filter!;
            filters.forEach((b) =>
                b.setAttribute("aria-pressed", String(b === btn)),
            );
            reviews.forEach((card) => {
                const tags = (card.dataset.tags ?? "").split("|");
                card.hidden = !(value === "all" || tags.includes(value));
            });
            ScrollTrigger.refresh();
        });
    });
}

function setupContactForm() {
    const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
    if (!form) return;
    const status = form.querySelector<HTMLElement>("[data-form-status]")!;
    const submit = form.querySelector<HTMLButtonElement>("[data-form-submit]")!;

    const show = (message: string, ok: boolean) => {
        status.textContent = message;
        status.className = `rounded-lg p-4 text-[15px] leading-snug ${ok ? "bg-primary-soft text-primary-ink" : "bg-[#fdf3ec] text-accent"}`;
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        submit.disabled = true;
        status.className = "hidden";

        const { data, error } = await actions.contact(new FormData(form));
        submit.disabled = false;

        if (error) {
            if (isInputError(error)) {
                const first = Object.values(error.fields).flat()[0];
                show(
                    first ?? "Merci de vérifier les champs du formulaire.",
                    false,
                );
            } else {
                show(error.message, false);
            }
            return;
        }

        if (data?.sent) {
            form.reset();
            show(
                "Merci, votre message a bien été envoyé. Je vous réponds personnellement dès que possible.",
                true,
            );
        }
    });
}

function teardown() {
    mm?.revert();
    mm = undefined;
    ScrollTrigger.getAll().forEach((t) => t.kill());
}

document.addEventListener("astro:page-load", () => {
    setupMenu();
    setupAnimations();
    setupFaq();
    setupFilters();
    setupContactForm();
});

document.addEventListener("astro:before-swap", teardown);

document.fonts?.ready.then(() => ScrollTrigger.refresh());
