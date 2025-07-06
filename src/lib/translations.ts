export const trn = {
    "en":{
        "hey":"Hey, I'm",
        "developer":"year-old Developer",
        "description":"Originating from Hungary, I specialize in UI/UX design and backend development. My primary expertise lies in web application development, where I focus on crafting effective and user-centric solutions.",
        "connectWith":"Contact",
        "scrollToSkills":"Skills",
        "skillsTitle":"Skills & Experience",
        "skillsDescription":"Technologies I work with and my experience level",
        "primaryStack":"Primary Stack",
        "primaryStackDesc":"Technologies I use regularly",
        "additionalExperience":"Additional Experience",
        "additionalExperienceDesc":"Technologies I have worked with",
        "experience":"Experience",
        "skillDescriptions":{
            "TypeScript":"Building robust, type-safe applications",
            "Nextjs":"Full-stack React framework expertise",
            "MongoDB":"NoSQL database design & optimization",
            "Expressjs":"Node.js web application framework",
            "Tailwind CSS":"Utility-first CSS framework mastery",
            "NGINX":"Web server configuration & reverse proxy",
            "Python":"Automation, scripting & data analysis",
            "Java":"Object-oriented programming & Spring"
        }
    },
    "de":{
        "hey":"Hey, ich bin",
        "developer":"Jahre alter Entwickler",
        "description": "Ich bin aus Ungarn und meine Expertise umfasst UI/UX Design sowie Backend-Entwicklung. Am liebsten widme ich mich der Entwicklung von Webanwendungen.",
        "connectWith":"Verfügbarkeit",
        "scrollToSkills":"Fähigkeiten",
        "skillsTitle":"Fähigkeiten & Erfahrung",
        "skillsDescription":"Technologien, mit denen ich arbeite und mein Erfahrungslevel",
        "primaryStack":"Haupt-Stack",
        "primaryStackDesc":"Technologien, die ich regelmäßig verwende",
        "additionalExperience":"Zusätzliche Erfahrung",
        "additionalExperienceDesc":"Technologien, mit denen ich gearbeitet habe",
        "experience":"Erfahrung",
        "skillDescriptions":{
            "TypeScript":"Erstellung robuster, typensicherer Anwendungen",
            "Nextjs":"Full-stack React Framework Expertise",
            "MongoDB":"NoSQL-Datenbankdesign & Optimierung",
            "Expressjs":"Node.js Webanwendungs-Framework",
            "Tailwind CSS":"Beherrschung des Utility-First CSS Frameworks",
            "NGINX":"Webserver-Konfiguration & Reverse Proxy",
            "Python":"Automatisierung, Skripting & Datenanalyse",
            "Java":"Objektorientierte Programmierung & Spring"
        }
    },
    "hu":{
        "hey":"Szia, én vagyok",
        "developer":"éves Fejlesztő",
        "description":"Magyarországról származom, és a UI/UX design, valamint a backend fejlesztés területén dolgozom. Fő szakterületem a weboldal-fejlesztés, ahol a hatékony és felhasználóközpontú megoldások létrehozására összpontosítok.",
        "connectWith":"Elérhetőségek",
        "scrollToSkills":"Készségek",
        "skillsTitle":"Készségek és Tapasztalatok",
        "skillsDescription":"Technológiák, amelyekkel dolgozom és tapasztalati szintem",
        "primaryStack":"Elsődleges Stack",
        "primaryStackDesc":"Technológiák, amelyeket rendszeresen használok",
        "additionalExperience":"További Tapasztalat",
        "additionalExperienceDesc":"Technológiák, amelyekkel dolgoztam",
        "experience":"Tapasztalat",
        "skillDescriptions":{
            "TypeScript":"Típusbiztos alkalmazások építése",
            "Nextjs":"Full-stack React keretrendszer szakértelem",
            "MongoDB":"NoSQL adatbázis tervezés és optimalizálás",
            "Expressjs":"Node.js webalkalmazás keretrendszer",
            "Tailwind CSS":"Utility-first CSS keretrendszer elsajátítása",
            "NGINX":"Webszerver konfiguráció és fordított proxy",
            "Python":"Automatizálás, szkriptelés és adatelemzés",
            "Java":"Objektumorientált programozás & Spring"
        }
    }
}

export type Lang = keyof typeof trn
export type TxtKey = keyof typeof trn.en

export const deepTxt = (trn: any, path: string): string => {
    const segs = path.split(".")
    let cur = trn

    for (const part of segs) {
        cur = cur?.[part]
        if (cur === undefined) return path
    }

    return cur || path
}