export interface Approche {
    slug: string;
    title?: string;
    nav: string;
    fullName: string;
    h1: [string, string];
    lead: string;
    meta: string;
    summary: string;
    cta: string;
    facts: [string, string][];
    what: { title: string; paragraphs: string[]; callout?: string };
    needsTitle: string;
    needs: [string, string][];
    steps: [string, string][];
    durationTitle: string;
    duration: string;
    quote?: { text: string; author: string };
    extra?: {
        id: string;
        title: string;
        paragraphs: string[];
        callout?: string;
    }[];
    faq?: [string, string][];
    related: string[];
}

const seance: [string, string][] = [
    ["Durée de séance", "55 min à 1h15"],
    ["Tarif adulte", "65 € puis 80 €"],
    ["Modalités", "Cabinet · domicile · visio"],
];

export const APPROCHES: Approche[] = [
    {
        slug: "emdr",
        title: "Thérapie EMDR à Salon-de-Provence",
        nav: "EMDR",
        fullName: "EMDR · Eye Movement Desensitization and Reprocessing",
        h1: ["Thérapie EMDR", "à Salon-de-Provence"],
        lead: "L'EMDR aide le cerveau à retraiter les souvenirs traumatiques pour qu'ils perdent leur charge émotionnelle. Une thérapie brève reconnue, pour enfants dès 3 ans, adolescents et adultes.",
        meta: "L'EMDR (NMO EMDR+) aide à retraiter les souvenirs traumatiques : stress post-traumatique, phobies, anxiété. Dès 3 ans, séances de 55 min à 1h15, dès 65 €.",
        summary:
            "Retraiter les souvenirs traumatiques pour qu'ils perdent leur charge émotionnelle.",
        cta: "Réserver une séance EMDR",
        facts: [
            ["Durée de séance", "55 min à 1h15"],
            ["Tarif adulte", "65 € puis 80 €"],
            ["Public", "Dès 3 ans"],
            ["Modalités", "Cabinet · domicile · visio"],
        ],
        what: {
            title: "Qu'est-ce que l'EMDR ?",
            paragraphs: [
                "L'EMDR (Eye Movement Desensitization and Reprocessing, soit désensibilisation et retraitement par les mouvements oculaires) est une psychothérapie qui utilise des stimulations bilatérales, mouvements oculaires, sons ou tapotements, pour aider le cerveau à retraiter des souvenirs restés « bloqués ». Le souvenir demeure, mais il ne déclenche plus la même détresse.",
                "Développée à la fin des années 1980 par la psychologue américaine Francine Shapiro, cette méthode est reconnue, notamment par l'Organisation mondiale de la santé, dans le traitement du stress post-traumatique.",
                "Que l'on ait connu de légers revers ou des traumatismes majeurs, notre vie est souvent influencée par des souvenirs et des expériences oubliées ou mal comprises, qui nous font agir comme à notre insu. L'EMDR aide à en desserrer l'emprise.",
            ],
            callout:
                "Au cabinet, l'EMDR est pratiquée dans sa version NMO EMDR+ (Neurothérapie par Mouvements Oculaires), et peut être combinée à l'hypnose ou à l'ICV selon votre besoin.",
        },
        needsTitle: "Pour quels troubles ?",
        needs: [
            ["Stress post-traumatique", "Accidents, agressions, deuils"],
            ["Phobies & angoisses", "Anxiété, crises de panique"],
            ["Violences subies", "Blessures anciennes ou récentes"],
            ["Dépression & estime de soi", "Croyances négatives persistantes"],
            [
                "Cauchemars & sommeil",
                "Réveils nocturnes, images qui reviennent",
            ],
            [
                "Souvenirs qui pèsent",
                "Événements anciens que le temps n'a pas apaisés",
            ],
        ],
        steps: [
            [
                "Anamnèse",
                "On fait connaissance, et on identifie ensemble le souvenir ou la situation cible, et vos ressources.",
            ],
            [
                "Préparation",
                "Je vous explique le déroulement et on installe des repères pour que vous vous sentiez en sécurité pendant le travail.",
            ],
            [
                "Stimulations bilatérales",
                "Vous vous concentrez sur le souvenir pendant des séries de mouvements oculaires, et vous me dites ce qui vient, sans avoir à tout raconter en détail.",
            ],
            [
                "Intégration",
                "La charge émotionnelle diminue ; on ancre une croyance positive sur vous-même, puis on fait le point à la fin de la séance.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Cela dépend de la nature et de l'ancienneté de la difficulté. Un événement isolé peut se traiter en quelques séances ; des traumatismes multiples demandent un suivi plus long. Nous faisons le point ensemble à chaque étape.",
        quote: {
            text: "Beaucoup de professionnalisme et d'attention en EMDR.",
            author: "Lilipop · avis patient",
        },
        extra: [
            {
                id: "ma-pratique",
                title: "Ma pratique : la NMO EMDR+",
                paragraphs: [
                    "Je suis formée à l'école ESHE/Coalix Academy à la NMO (Neurothérapie par Mouvements Oculaires), une technique issue de l'EMDR. Elle repose sur une stimulation sensorielle bilatérale, qui sollicite les deux hémisphères du cerveau en alternance, pour aider à porter un nouveau regard sur un événement douloureux.",
                    "Le but est de pouvoir se souvenir de ce qui a été vécu de manière plus sereine. C'est un mécanisme naturel de retraitement que la thérapie vient accompagner.",
                ],
            },
            {
                id: "complementarite",
                title: "Une approche complémentaire",
                paragraphs: [
                    "L'EMDR peut être associée à la psychothérapie, à l'hypnothérapie ou à la PNL, pour diminuer progressivement les émotions liées à un événement vécu comme traumatisant et retrouver de la liberté dans votre quotidien.",
                ],
                callout:
                    "L'EMDR ne remplace en aucun cas un suivi ou un traitement médical. Elle peut le compléter.",
            },
        ],
        faq: [
            [
                "L'EMDR est-elle efficace ?",
                "L'EMDR est une méthode reconnue, notamment par l'Organisation mondiale de la santé, pour le traitement du stress post-traumatique. Les résultats varient d'une personne à l'autre : nous faisons le point régulièrement pour ajuster le suivi.",
            ],
            [
                "Faut-il raconter son traumatisme en détail ?",
                "Non. Vous n'avez pas à tout raconter. Pendant les stimulations, vous partagez simplement ce qui vient, à votre rythme, et vous pouvez faire une pause quand vous le souhaitez.",
            ],
            [
                "Une séance d'EMDR est-elle douloureuse ?",
                "Des émotions ou des images peuvent remonter pendant la séance, car on travaille sur des souvenirs difficiles. Je vous accompagne tout au long, et la séance se termine toujours par un temps de retour au calme.",
            ],
            [
                "À partir de quel âge peut-on faire de l'EMDR ?",
                "Je reçois les enfants dès 3 ans, les adolescents et les adultes. La séance est adaptée à l'âge de chacun.",
            ],
            [
                "Combien coûte une séance d'EMDR à Salon-de-Provence ?",
                "Pour un adulte, la première consultation (55 min) coûte 65 €, puis 80 € la séance de suivi (1h15). Pour un enfant : 55 € puis 70 €. Les séances ne sont pas remboursées par la Sécurité sociale ; certaines mutuelles prennent en charge les thérapies brèves.",
            ],
        ],
        related: ["nmo-emdr-plus", "hypnotherapie", "psychotraumatologie"],
    },
    {
        slug: "nmo-emdr-plus",
        title: "NMO EMDR+ (mouvements oculaires) à Salon-de-Provence",
        nav: "NMO EMDR+",
        fullName: "NMO EMDR+ · Neurothérapie par Mouvements Oculaires",
        h1: ["NMO EMDR+", "à Salon-de-Provence"],
        lead: "La Neurothérapie par Mouvements Oculaires est la version de l'EMDR pratiquée au cabinet : des mouvements oculaires guidés pour accompagner le cerveau dans le retraitement des souvenirs difficiles.",
        meta: "NMO EMDR+ (neurothérapie par mouvements oculaires) à Salon-de-Provence : la version de l'EMDR pratiquée au cabinet. Séances dès 65 €.",
        summary:
            "La version de l'EMDR pratiquée au cabinet, par mouvements oculaires guidés.",
        cta: "Réserver une séance NMO EMDR+",
        facts: seance,
        what: {
            title: "Qu'est-ce que la NMO EMDR+ ?",
            paragraphs: [
                "La NMO EMDR+ (Neurothérapie par Mouvements Oculaires) est la forme d'EMDR que je pratique au cabinet. Elle repose sur le même principe : des stimulations bilatérales, ici principalement des mouvements oculaires, aident le cerveau à retraiter des souvenirs qui restent douloureux.",
                "Le souvenir n'est pas effacé. Il est « rangé » à sa juste place : on peut y repenser sans revivre la détresse qui lui était associée.",
            ],
            callout:
                "La NMO EMDR+ peut être combinée à l'hypnose, à l'ICV ou aux TCC selon votre situation. Nous choisissons ensemble ce qui vous convient.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            ["Traumatismes", "Accidents, agressions, événements violents"],
            [
                "Souvenirs qui envahissent",
                "Flashbacks, cauchemars, images récurrentes",
            ],
            ["Peurs et phobies", "Réactions disproportionnées à une situation"],
            ["Blessures anciennes", "Événements du passé qui pèsent encore"],
        ],
        steps: [
            [
                "Faire connaissance",
                "On précise votre demande, votre histoire et ce que vous souhaitez changer.",
            ],
            [
                "Mouvements oculaires",
                "Vous suivez un stimulus des yeux, en pensant à la situation ciblée, par séries courtes.",
            ],
            [
                "Faire le point",
                "Après chaque série, vous décrivez ce qui vient ; on poursuit jusqu'à l'apaisement.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Le nombre de séances dépend de l'histoire de chacun. Certaines situations se résolvent en quelques séances, d'autres demandent plus de temps. Nous faisons le point régulièrement.",
        related: ["emdr", "psychotraumatologie", "hypnotherapie"],
    },
    {
        slug: "psychotraumatologie",
        nav: "Psychotraumatologie",
        fullName: "Psychotraumatologie",
        h1: ["Psychotraumatologie", "à Salon-de-Provence"],
        lead: "La psychotraumatologie s'intéresse aux traumatismes psychiques et à leurs effets durables. L'objectif : comprendre ce qui se passe en vous, puis alléger ce qui pèse.",
        meta: "Psychotraumatologie à Salon-de-Provence : comprendre et soigner les effets d'un traumatisme (stress post-traumatique, violences, accidents). Dès 65 €.",
        summary: "Comprendre et soigner les effets du trauma.",
        cta: "Réserver une séance",
        facts: seance,
        what: {
            title: "Qu'est-ce que la psychotraumatologie ?",
            paragraphs: [
                "La psychotraumatologie est le champ de la psychologie qui étudie les traumatismes psychiques : ce qui se passe lorsqu'un événement dépasse nos capacités à y faire face, et comment le soigner.",
                "Un traumatisme peut résulter d'un événement unique (accident, agression) ou d'événements répétés (violences, harcèlement). Il peut se manifester tout de suite ou des années plus tard.",
            ],
            callout:
                "La psychotraumatologie est le cadre de mon travail sur le trauma. Elle s'appuie sur des outils comme l'EMDR, l'hypnose ou l'ICV.",
        },
        needsTitle: "Quels signes peuvent alerter ?",
        needs: [
            [
                "Reviviscences",
                "Flashbacks, images ou cauchemars qui reviennent",
            ],
            [
                "Hypervigilance",
                "Sursauts, tension permanente, difficulté à se détendre",
            ],
            [
                "Évitement",
                "Éviter lieux, personnes ou pensées liées à l'événement",
            ],
            [
                "Émotions envahissantes",
                "Culpabilité, honte, colère, sentiment de détachement",
            ],
        ],
        steps: [
            [
                "Comprendre et stabiliser",
                "On met des mots sur ce que vous vivez, et on installe des ressources pour vous sentir en sécurité.",
            ],
            [
                "Retraiter",
                "On travaille les souvenirs difficiles avec l'outil le plus adapté, sans vous brusquer.",
            ],
            [
                "Reconstruire",
                "On consolide les changements et on retrouve de la confiance dans le quotidien.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Le rythme est défini avec vous. Un événement récent et isolé n'appelle pas le même suivi qu'un traumatisme ancien ou répété. On avance à votre rythme, avec des points d'étape réguliers.",
        related: ["emdr", "icv", "hypnotherapie"],
    },
    {
        slug: "icv",
        title: "ICV, Intégration du Cycle de la Vie à Salon-de-Provence",
        nav: "ICV",
        fullName: "ICV · Intégration du Cycle de la Vie",
        h1: ["Intégration du Cycle de la Vie", "à Salon-de-Provence"],
        lead: "L'ICV s'intéresse aux événements vécus tôt dans la vie et à leur impact durable. Une approche pour dénouer ce qui pèse encore, souvent sans qu'on sache pourquoi.",
        meta: "ICV (Intégration du Cycle de la Vie) à Salon-de-Provence : une approche pour les traumas précoces et leurs effets durables. Dès 65 €.",
        summary: "Intégration du Cycle de la Vie, pour les traumas précoces.",
        cta: "Réserver une séance ICV",
        facts: seance,
        what: {
            title: "Qu'est-ce que l'ICV ?",
            paragraphs: [
                "L'ICV (Intégration du Cycle de la Vie) est une approche thérapeutique qui s'intéresse aux traumatismes précoces : événements vécus dans l'enfance ou même avant, dont les effets peuvent se faire sentir à l'âge adulte.",
                "Elle aide à reconnaître comment ces expériences ont façonné certaines réactions, croyances ou difficultés, pour pouvoir les intégrer autrement.",
            ],
            callout:
                "L'ICV se combine souvent avec l'EMDR ou l'hypnose. Nous construisons le suivi selon votre histoire.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            [
                "Traumas précoces",
                "Événements de l'enfance, séparations, ruptures",
            ],
            [
                "Schémas qui se répètent",
                "Relations ou situations qui reproduisent les mêmes difficultés",
            ],
            [
                "Mal-être sans cause claire",
                "Une souffrance dont l'origine reste floue",
            ],
            ["Deuil et pertes", "Chagrins non résolus qui continuent à peser"],
        ],
        steps: [
            [
                "Explorer votre histoire",
                "On repère ensemble les périodes et les événements qui comptent pour vous.",
            ],
            [
                "Travailler les expériences",
                "On revisite ce qui est resté bloqué, à un rythme qui respecte votre sécurité.",
            ],
            [
                "Intégrer",
                "On aide ces expériences à trouver leur place dans votre histoire de vie.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Chaque histoire est singulière. Le nombre de séances dépend de ce que vous traversez et de ce que vous souhaitez changer. Nous en parlons dès la première consultation.",
        related: ["psychotraumatologie", "emdr", "acp"],
    },
    {
        slug: "psychologie-cognitive",
        nav: "Psychologie cognitive",
        fullName: "Psychologie cognitive",
        h1: ["Psychologie cognitive", "à Salon-de-Provence"],
        lead: "La psychologie cognitive étudie la façon dont nous percevons, interprétons et mémorisons. En séance, elle aide à comprendre pourquoi certaines pensées s'imposent à vous.",
        meta: "Psychologie cognitive à Salon-de-Provence : comprendre ses pensées, ses croyances et ses réactions pour mieux les transformer. Dès 65 €.",
        summary:
            "Comprendre comment vos pensées et vos croyances influencent ce que vous ressentez.",
        cta: "Réserver une séance",
        facts: seance,
        what: {
            title: "Qu'est-ce que la psychologie cognitive ?",
            paragraphs: [
                "La psychologie cognitive étudie les processus mentaux : l'attention, la mémoire, l'interprétation des situations, les croyances. Elle est à la base des thérapies cognitivo-comportementales.",
                "Appliquée à l'accompagnement, elle permet de repérer comment certaines façons d'interpréter ce qui nous arrive entretiennent l'anxiété, la tristesse ou le doute de soi.",
            ],
            callout:
                "Cette approche éclaire mon travail en TCC et en psychotraumatologie. Elle ne remplace pas ces approches : elle les rend plus précises.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            [
                "Pensées envahissantes",
                "Ruminations, scénarios catastrophes, doutes répétés",
            ],
            [
                "Croyances limitantes",
                "« Je ne suis pas capable », « je ne mérite pas »",
            ],
            [
                "Mémoire et concentration",
                "Difficultés liées au stress ou à la fatigue",
            ],
            [
                "Réactions difficiles à comprendre",
                "Comprendre pourquoi une situation vous touche autant",
            ],
        ],
        steps: [
            [
                "Observer",
                "On repère les situations, les pensées qui apparaissent et ce que vous ressentez.",
            ],
            [
                "Comprendre",
                "On explore les liens entre vos pensées, vos émotions et vos comportements.",
            ],
            [
                "Transformer",
                "On teste des façons de penser plus justes et plus apaisantes.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "L'accompagnement est généralement limité dans le temps et centré sur vos objectifs. Nous faisons le point à intervalles réguliers pour ajuster la suite.",
        related: [
            "tcc",
            "psychotherapie-cognitive-comportementale",
            "psychotraumatologie",
        ],
    },
    {
        slug: "eft",
        title: "EFT, libération émotionnelle à Salon-de-Provence",
        nav: "EFT",
        fullName: "EFT · Emotional Freedom Techniques",
        h1: [
            "EFT, technique de libération émotionnelle",
            "à Salon-de-Provence",
        ],
        lead: "L'EFT associe des tapotements sur des points du corps et l'attention portée à une émotion ou à une pensée gênante. Une technique douce pour apaiser le stress, simple à refaire chez soi.",
        meta: "EFT (technique de libération émotionnelle) à Salon-de-Provence : apaiser stress, peurs et émotions par des tapotements. Séances dès 65 €.",
        summary:
            "Apaiser le stress et les émotions grâce à des tapotements sur des points précis.",
        cta: "Réserver une séance EFT",
        facts: seance,
        what: {
            title: "Qu'est-ce que l'EFT ?",
            paragraphs: [
                "L'EFT (Emotional Freedom Techniques, ou technique de libération émotionnelle) consiste à tapoter du bout des doigts une série de points du haut du corps, tout en pensant à une situation ou à une émotion qui vous gêne.",
                "Cette technique se pratique facilement et peut s'apprendre : vous repartez avec un outil à utiliser seul·e en cas de montée de stress.",
            ],
            callout:
                "L'EFT est un outil complémentaire. Il ne remplace ni un suivi médical, ni un traitement prescrit.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            [
                "Stress et tensions",
                "Apaiser les montées de stress du quotidien",
            ],
            [
                "Peurs et angoisses",
                "Peur de parler en public, d'un examen, de situations précises",
            ],
            [
                "Émotions fortes",
                "Colère, tristesse, culpabilité qui reviennent",
            ],
            [
                "Envies et habitudes",
                "Appui lors d'un sevrage ou de changements d'habitudes",
            ],
        ],
        steps: [
            [
                "Cibler",
                "On choisit la situation ou l'émotion à traiter et vous notez son intensité de 0 à 10.",
            ],
            [
                "Tapoter",
                "On enchaîne les tapotements sur les points, avec des phrases qui reconnaissent la difficulté.",
            ],
            [
                "Réévaluer",
                "On regarde comment l'intensité a évolué et on recommence si besoin.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Quelques séances suffisent souvent pour une difficulté ciblée. L'EFT peut aussi s'intégrer à un suivi plus large avec une autre approche.",
        related: ["relaxologie-sophrologie", "hypnotherapie", "tcc"],
    },
    {
        slug: "tcc",
        title: "TCC, thérapie cognitivo-comportementale à Salon-de-Provence",
        nav: "TCC",
        fullName: "TCC · Thérapies cognitivo-comportementales",
        h1: ["Thérapies cognitivo-comportementales", "à Salon-de-Provence"],
        lead: "Les TCC identifient les pensées et les comportements qui entretiennent la souffrance, puis les transforment pas à pas avec des exercices concrets. Une thérapie structurée et orientée vers vos objectifs.",
        meta: "TCC (thérapies cognitivo-comportementales) à Salon-de-Provence : anxiété, phobies, dépression, burn-out. Exercices concrets, dès 65 €.",
        summary:
            "Identifier les pensées et comportements qui entretiennent la souffrance et les transformer.",
        cta: "Réserver une séance TCC",
        facts: seance,
        what: {
            title: "Que sont les TCC ?",
            paragraphs: [
                "Les thérapies cognitivo-comportementales (TCC) partent d'un constat : nos pensées, nos émotions et nos comportements s'influencent les uns les autres. Quand certains de ces enchaînements entretiennent une souffrance, on peut les modifier.",
                "La démarche est active : vous êtes acteur de la thérapie, avec des objectifs clairs et des exercices à mettre en pratique entre les séances.",
            ],
            callout:
                "Les TCC s'appuient sur des méthodes validées scientifiquement pour de nombreuses difficultés, notamment l'anxiété, les phobies et la dépression.",
        },
        needsTitle: "Pour quels troubles ?",
        needs: [
            [
                "Anxiété et crises de panique",
                "Comprendre et désamorcer le cercle de la peur",
            ],
            ["Phobies", "Se confronter progressivement à ce qui fait peur"],
            [
                "Dépression",
                "Retrouver de l'énergie et reprendre goût aux activités",
            ],
            [
                "Burn-out et stress",
                "Mieux gérer la pression et les ruminations",
            ],
        ],
        steps: [
            [
                "Faire le point",
                "On définit vos difficultés, vos objectifs, et on explique le fonctionnement des TCC.",
            ],
            [
                "Repérer les mécanismes",
                "On identifie les pensées automatiques et les comportements qui entretiennent le problème.",
            ],
            [
                "Pratiquer",
                "On expérimente de nouvelles façons de penser et d'agir, avec des exercices à faire entre les séances.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Les TCC sont des thérapies brèves : la durée est définie dès le départ en fonction de vos objectifs, puis ajustée au fil des séances.",
        related: [
            "psychotherapie-cognitive-comportementale",
            "psychologie-cognitive",
            "hypnotherapie",
        ],
    },
    {
        slug: "psychotherapie-cognitive-comportementale",
        nav: "Psychothérapie cognitive comportementale",
        fullName: "Psychothérapie Cognitive Comportementale",
        h1: [
            "Psychothérapie cognitive et comportementale",
            "à Salon-de-Provence",
        ],
        lead: "Un accompagnement psychothérapeutique qui s'appuie sur les approches cognitives et comportementales pour comprendre vos difficultés et construire des changements durables.",
        meta: "Psychothérapie cognitive et comportementale à Salon-de-Provence : un suivi structuré pour anxiété, dépression, phobies, troubles du comportement. Dès 65 €.",
        summary:
            "Un suivi psychothérapeutique structuré, fondé sur les approches cognitives et comportementales.",
        cta: "Réserver une séance",
        facts: seance,
        what: {
            title: "Qu'est-ce que la psychothérapie cognitive comportementale ?",
            paragraphs: [
                "La psychothérapie cognitive et comportementale est un suivi dans la durée qui combine plusieurs outils des TCC : repérer les pensées et croyances, tester de nouveaux comportements, s'exposer progressivement à ce qui fait peur.",
                "Elle prend en compte votre histoire et votre façon de fonctionner, pas seulement le symptôme du moment. Le cadre est clair, chaque séance a un objectif.",
            ],
            callout:
                "Cette approche s'adapte à l'âge : je reçois les enfants, adolescents et adultes, avec des outils adaptés à chacun.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            [
                "Troubles anxieux",
                "Anxiété généralisée, attaques de panique, TOC",
            ],
            ["Dépression", "Baisse de moral, perte de motivation"],
            ["Estime de soi", "Doute permanent, peur du jugement"],
            ["Difficultés de comportement", "Habitudes qu'on voudrait changer"],
        ],
        steps: [
            [
                "Définir le cadre",
                "On pose les objectifs, la fréquence des séances et la façon de mesurer vos progrès.",
            ],
            [
                "Travailler",
                "On utilise les outils adaptés : restructuration des pensées, exposition progressive, expériences concrètes.",
            ],
            [
                "Consolider",
                "On vous aide à garder vos acquis, et à reconnaître les signes de rechute pour mieux les gérer.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "La durée varie selon les objectifs fixés et la nature des difficultés. Un point est fait régulièrement pour décider ensemble de la suite.",
        related: ["tcc", "psychologie-cognitive", "acp"],
    },
    {
        slug: "hypnotherapie",
        nav: "Hypnothérapie",
        fullName: "Hypnothérapie clinique cognitive & comportementale",
        h1: ["Hypnothérapie", "à Salon-de-Provence"],
        lead: "Un état de concentration naturel pour accéder à vos ressources et modifier durablement des schémas : anxiété, sommeil, addictions, confiance en soi.",
        meta: "Hypnothérapie clinique cognitive et comportementale à Salon-de-Provence : anxiété, sommeil, addictions, confiance en soi. Dès 65 €.",
        summary: "Accéder à vos ressources pour changer durablement.",
        cta: "Réserver une séance d'hypnose",
        facts: seance,
        what: {
            title: "Qu'est-ce que l'hypnothérapie ?",
            paragraphs: [
                "L'hypnose est un état de concentration profonde, naturel, que nous connaissons tous : quand on est absorbé par un livre ou une rêverie. En séance, il est guidé pour faciliter le changement.",
                "Vous restez conscient·e et maître de vous-même. L'hypnose ne fait pas perdre le contrôle et personne ne peut vous faire dire ou faire ce que vous ne voulez pas.",
            ],
            callout:
                "L'hypnothérapie clinique cognitive et comportementale associe l'hypnose aux outils des TCC pour ancrer les changements au quotidien.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            ["Anxiété et stress", "Retrouver du calme et de la sérénité"],
            ["Sommeil", "Difficultés d'endormissement, réveils nocturnes"],
            ["Addictions", "Tabac, alcool, habitudes difficiles à arrêter"],
            ["Confiance en soi", "Examens, prise de parole, peurs spécifiques"],
        ],
        steps: [
            [
                "Entretien",
                "On définit votre objectif et on explique le déroulement. Vous posez vos questions.",
            ],
            [
                "Induction et travail hypnotique",
                "Je vous guide vers un état de détente profonde pour travailler sur votre objectif.",
            ],
            [
                "Retour",
                "On revient en douceur à l'état habituel et on échange sur votre ressenti.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Le nombre de séances dépend de l'objectif : quelques séances suffisent souvent pour une difficulté ciblée. Nous faisons le point à chaque étape.",
        related: ["tcc", "emdr", "relaxologie-sophrologie"],
    },
    {
        slug: "acp",
        nav: "Approche centrée sur la personne",
        fullName: "ACP · Approche Centrée sur la Personne",
        h1: ["Approche centrée sur la personne", "à Salon-de-Provence"],
        lead: "Un espace d'écoute, sans jugement, pour comprendre ce qui se joue en vous et dans vos relations. Vous êtes la personne qui connaît le mieux votre situation.",
        meta: "Approche centrée sur la personne à Salon-de-Provence : une écoute bienveillante, sans jugement, pour avancer à votre rythme. Dès 65 €.",
        summary:
            "Un espace d'écoute pour comprendre ce qui se joue dans la relation.",
        cta: "Réserver une séance",
        facts: seance,
        what: {
            title: "Qu'est-ce que l'approche centrée sur la personne ?",
            paragraphs: [
                "L'approche centrée sur la personne (ACP) a été développée par le psychologue américain Carl Rogers. Elle repose sur une conviction : chacun possède en lui les ressources pour évoluer, dans un cadre qui offre écoute, respect et authenticité.",
                "Le thérapeute n'impose ni interprétation, ni solution. Il accompagne votre propre réflexion, avec empathie et sans jugement.",
            ],
            callout:
                "L'empathie et l'absence de jugement sont au cœur de ma pratique, quelle que soit l'approche utilisée ensuite.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            [
                "Se comprendre",
                "Mieux se connaître, clarifier ce qu'on ressent et ce qu'on veut",
            ],
            [
                "Relations difficiles",
                "Couple, famille, travail : prendre du recul",
            ],
            ["Périodes de transition", "Séparation, deuil, changement de vie"],
            [
                "Se sentir entendu·e",
                "Avoir un espace pour déposer ce qu'on porte",
            ],
        ],
        steps: [
            [
                "Accueillir",
                "Vous déposez ce qui vous amène, à votre rythme, sans qu'on vous interrompe ou vous juge.",
            ],
            [
                "Explorer",
                "Je reformule, je questionne, je vous aide à clarifier vos ressentis et vos besoins.",
            ],
            [
                "Avancer",
                "Vous trouvez vos propres pistes, que nous pouvons compléter avec d'autres approches.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Il n'y a pas de nombre fixé à l'avance : nous décidons ensemble du rythme et de la durée, selon votre besoin.",
        related: [
            "pnl-coaching",
            "psychotherapie-cognitive-comportementale",
            "icv",
        ],
    },
    {
        slug: "pnl-coaching",
        nav: "PNL & coaching",
        fullName: "PNL · Programmation neuro-linguistique",
        h1: ["PNL & coaching", "à Salon-de-Provence"],
        lead: "La programmation neuro-linguistique (PNL) offre des outils pour mieux communiquer, poser ses limites et sortir des schémas répétitifs. Une approche pratique, tournée vers vos objectifs.",
        meta: "PNL (programmation neuro-linguistique) et coaching à Salon-de-Provence : communication, confiance, objectifs, schémas répétitifs. Séances dès 65 €.",
        summary:
            "Mieux communiquer, poser ses limites, sortir des schémas répétitifs.",
        cta: "Réserver une séance",
        facts: seance,
        what: {
            title: "Qu'est-ce que la PNL ?",
            paragraphs: [
                "La programmation neuro-linguistique (PNL) est un ensemble d'outils de communication et de changement personnel. Elle s'intéresse à la façon dont nous représentons le monde, aux mots que nous utilisons et aux comportements qui en découlent.",
                "En séance, on identifie ce qui fonctionne et ce qui vous freine, on précise des objectifs clairs, puis on expérimente d'autres façons de réagir.",
            ],
            callout:
                "La PNL est un outil d'accompagnement, qui n'est pas une thérapie à elle seule. Je l'associe aux autres approches selon vos besoins.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            ["Communication", "Mieux s'exprimer, écouter, se faire comprendre"],
            ["Poser ses limites", "Dire non, s'affirmer sans conflit"],
            [
                "Schémas répétitifs",
                "Reproduire sans cesse les mêmes situations",
            ],
            ["Objectifs", "Clarifier un projet et passer à l'action"],
        ],
        steps: [
            [
                "Clarifier",
                "On définit votre objectif de façon précise et mesurable.",
            ],
            [
                "Explorer",
                "On repère ce qui vous freine : croyances, émotions, habitudes de communication.",
            ],
            [
                "Expérimenter",
                "On teste de nouvelles façons de faire, en séance puis dans votre quotidien.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Quelques séances suffisent souvent pour atteindre un objectif précis. Nous en parlons dès la première séance.",
        related: ["coaching-personnel-professionnel", "acp", "eft"],
    },
    {
        slug: "coaching-personnel-professionnel",
        nav: "Coaching personnel et professionnel",
        fullName: "Coaching personnel et professionnel",
        h1: ["Coaching personnel et professionnel", "à Salon-de-Provence"],
        lead: "Un accompagnement tourné vers l'avenir pour clarifier vos objectifs, prendre une décision ou franchir une étape, dans votre vie personnelle comme professionnelle.",
        meta: "Coaching personnel et professionnel à Salon-de-Provence : objectifs, confiance, transition de carrière, décisions. 1re séance 75 € (1h30).",
        summary: "Vie, développement personnel ou professionnel.",
        cta: "Réserver une séance de coaching",
        facts: [
            ["Durée de séance", "1h30"],
            ["Tarif", "75 € puis 100 €"],
            ["Modalités", "Cabinet · domicile · visio"],
        ],
        what: {
            title: "Qu'est-ce que le coaching ?",
            paragraphs: [
                "Le coaching est un accompagnement orienté vers vos objectifs. Il vous aide à clarifier ce que vous voulez, à identifier vos freins et à passer à l'action, avec un cadre et un suivi.",
                "Il se distingue de la thérapie : il ne vise pas à soigner un trouble, mais à progresser vers un but précis, personnel ou professionnel.",
            ],
            callout:
                "Si, au fil des séances, un sujet relève plutôt d'un suivi thérapeutique, nous en parlons ensemble et je peux vous proposer l'approche adaptée.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            ["Choix et décisions", "Orientation, reconversion, projet de vie"],
            [
                "Confiance et affirmation",
                "Prendre sa place, oser, prendre la parole",
            ],
            [
                "Transition professionnelle",
                "Changement de poste, prise de responsabilités",
            ],
            ["Équilibre de vie", "Organisation, priorités, gestion du stress"],
        ],
        steps: [
            [
                "Définir votre objectif",
                "On précise ce que vous voulez atteindre et pourquoi c'est important pour vous.",
            ],
            [
                "Identifier les leviers",
                "On repère vos ressources et ce qui vous freine, pour construire un plan d'action.",
            ],
            [
                "Passer à l'action",
                "On définit des étapes concrètes, et on fait le point à chaque séance.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Un accompagnement de coaching dure en général quelques séances, selon l'objectif. Chaque séance dure 1h30.",
        related: ["pnl-coaching", "acp", "relaxologie-sophrologie"],
    },
    {
        slug: "relaxologie-sophrologie",
        nav: "Relaxologie & sophrologie",
        fullName: "Relaxologie & sophrologie",
        h1: ["Relaxologie et sophrologie", "à Salon-de-Provence"],
        lead: "Respiration, détente musculaire et visualisation pour relâcher les tensions, retrouver le calme et mieux dormir. Des exercices simples que vous pouvez refaire chez vous.",
        meta: "Relaxologie et sophrologie à Salon-de-Provence : gérer le stress, mieux dormir, relâcher les tensions. Exercices à refaire chez soi. Séances dès 65 €.",
        summary: "Retrouver le calme par la respiration et la relaxation.",
        cta: "Réserver une séance",
        facts: seance,
        what: {
            title: "Que sont la relaxologie et la sophrologie ?",
            paragraphs: [
                "La relaxologie et la sophrologie sont des méthodes de détente qui associent respiration, relâchement musculaire et imagerie mentale. Elles aident le corps et l'esprit à se mettre au repos.",
                "L'objectif : mieux repérer ce qui se passe en vous, relâcher ce qui est tendu et vous constituer des ressources pour les moments difficiles.",
            ],
            callout:
                "Ces méthodes complètent un suivi thérapeutique : elles apportent des outils concrets pour le quotidien.",
        },
        needsTitle: "Pour quels besoins ?",
        needs: [
            ["Stress et nervosité", "Apaiser le corps et ralentir le mental"],
            [
                "Sommeil",
                "Se détendre avant de dormir, retrouver un meilleur repos",
            ],
            [
                "Tensions physiques",
                "Nuque, épaules, mâchoire, respiration courte",
            ],
            [
                "Préparation à un événement",
                "Examen, entretien, prise de parole",
            ],
        ],
        steps: [
            [
                "Accueil",
                "On échange sur votre état du moment et sur ce que vous souhaitez améliorer.",
            ],
            [
                "Exercices guidés",
                "Je vous guide dans des exercices de respiration, de relâchement et de visualisation.",
            ],
            [
                "Retour d'expérience",
                "On parle de ce que vous avez ressenti, et vous repartez avec des exercices à refaire.",
            ],
        ],
        durationTitle: "Combien de séances ?",
        duration:
            "Quelques séances permettent d'acquérir les exercices. Ensuite, la pratique régulière chez soi fait toute la différence.",
        related: ["hypnotherapie", "eft", "tcc"],
    },
];

export const getApproche = (slug: string) =>
    APPROCHES.find((a) => a.slug === slug);
