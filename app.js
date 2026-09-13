// Budget amounts in EUR. Leave undefined allocations as null.
const budgetData = {
  "total": 30000,
  "countries": [
    {
      "id": "br",
      "value": null
    },
    {
      "id": "pt",
      "value": null
    },
    {
      "id": "de",
      "value": null
    }
  ],
  "departments": [
    {
      "id": "art",
      "value": null
    },
    {
      "id": "technical",
      "value": null
    },
    {
      "id": "production",
      "value": null
    },
    {
      "id": "international",
      "value": null
    },
    {
      "id": "communication",
      "value": null
    }
  ],
  "productionAreas": [
    {
      "id": "fees",
      "value": null
    },
    {
      "id": "travel",
      "value": null
    },
    {
      "id": "accommodation",
      "value": null
    },
    {
      "id": "equipment",
      "value": null
    },
    {
      "id": "venues",
      "value": null
    },
    {
      "id": "materials",
      "value": null
    }
  ]
};

const translations = {
  pt: {
    improvisation: {
      "harp": "HARPA",
      "bassoon": "FAGOTE",
      "electronics": "BASE ELETRÔNICA RÍTMICA E HARMÔNICA",
      "eyebrow": "PROPOSTA",
      "title": "UM TERRITÓRIO PARA IMPROVISAR",
      "main": "E se harpa e fagote pudessem encontrar-se através da improvisação?",
      "secondary": "Uma base eletrônica rítmica e harmônica criada por Marta poderia funcionar como território comum para a improvisação de Ricarda e Mariana.",
      "q1": "Marta — esta estrutura faria sentido dentro da composição?",
      "q2": "Ricarda — você teria interesse em explorar este formato?",
      "q3": "Mariana — como você imagina o fagote dentro deste espaço de improvisação?"
    },
    people: {
      martaRole: "Composição",
      lucimarRole: "Figurino",
      "category": "COLETIVO · MESA CRIATIVA ATUAL",
      "zoeBio": "Zoë Melo é fundadora da TOUCH, sediada em Los Angeles (EUA), onde presta consultoria a designers, marcas e ONGs. Seu trabalho articula design e impacto socioambiental, com foco em projetos que buscam gerar efeitos positivos para o ambiente e para as pessoas.",
      "ricardaBio": "Harpista com atuação em música de câmara e criação contemporânea. Integra o Alveolar Trio, formação de flauta, viola e harpa.",
      "marianaBio": "Fagotista com atividade em repertório contemporâneo e música de conjunto, participando de diferentes projetos instrumentais e interdisciplinares.",
      "caioBio": "Artista e técnico audiovisual brasileiro com formação em Tecnologias da Música pela Escola Superior de Música de Lisboa e atuação em espacialização sonora, vídeo, 3D, fabricação digital e produção audiovisual."
    },
    invitations: {
      "status": "POSSÍVEL CONVITE · NÃO CONFIRMADO",
      "janelas": "JANELAS · fagote + eletrônica",
      "magistri": "MAGISTRI · possível conversa",
      "title": "POSSÍVEIS CONVITES",
      "note": "Estas participações ainda não estão confirmadas. São possibilidades para discussão do grupo antes de qualquer convite formal.",
      "nunoBio": "Nuno Lobo é compositor português, formado em Composição pela ESMAE e pelo Conservatorium van Amsterdam. O seu trabalho cruza música instrumental e vocal com formatos interdisciplinares.",
      "jaimeBio": "Jaime Reis é compositor português, professor de Composição e Música Electroacústica na ESML e diretor artístico do Festival DME e do Lisboa Incomum. A espacialização e os sistemas sonoros imersivos ocupam um lugar importante no seu trabalho."
    },
    privacy: {
      "label": "MATERIAL INTERNO · NÃO CIRCULAR",
      "note": "Esta página reúne materiais, hipóteses artísticas e referências em desenvolvimento para discussão interna do Departamento de Arte e Performance. Pedimos que conteúdos inéditos, links privados e propostas ainda não confirmadas não sejam compartilhados fora deste grupo."
    },
    network: {
      "caption": "uma criação em rede"
    },
    review: {
      "note": "Vídeo inédito · visualização interna · hipótese em discussão. Nenhuma adaptação ou utilização pública autorizada até o momento.",
      "label": "em avaliação artística"
    },
    login: {"access": "E-mail ou acesso", "password": "Senha", "enter": "Entrar", "logout": "Sair", "error": "Dados de acesso incorretos."},
    intro: {
      eyebrow: "Departamento de Arte e Performance · Encontro #01",
      title: "ONÇA—LINCE",
      question: "Como a Onça e o Lince percebem o mundo?"
    },

    collective: {
      eyebrow: "O coletivo",
      title: "Seis perspectivas para uma mesma criação"
    },

    animals: {
      question:
        "Em vez de representar a aparência desses animais, podemos investigar como eles percebem o mundo?"
    },

    references: {
      vieiraStatus: "REFERÊNCIA / POSSÍVEL CONVIDADA",
      vieiraRole: "composição · música mista · eletrónica",
      vieiraBio: "Mariana Vieira é compositora portuguesa, formada em Composição pela Escola Superior de Música de Lisboa, onde estudou com Carlos Caires e Jaime Reis. O seu catálogo inclui música acusmática, mista e instrumental, e o seu percurso articula composição, tecnologia e produção artística. A sua música tem sido apresentada em festivais internacionais e recebeu distinções em composição orquestral e electroacústica.",
      vieiraHistory: "Em 2016, Mariana Vieira apresentou no contexto do Laboratório de Música Mista da ESML uma obra para harpa e eletrónica.",
      vieiraHistoryLink: "Harpa + eletrónica · 2016 ↗",
      developmentCredit: "Concepção e desenvolvimento do site: Caio Rodrigues.",
      eyebrow: "Ouvir · observar · discutir",
      title: "Referências para a conversa",
      marta: "Seleção de obras para escuta e discussão.",
      martaBio: "Marta Domingues é compositora. Concluiu o Mestrado em Composição na Escola Superior de Música de Lisboa, sob orientação de Jaime Reis e Annette Vande Gorne, e o Mestrado em Ensino da Música na mesma instituição. Atualmente é doutoranda na Faculdade de Belas-Artes da Universidade de Lisboa. O seu catálogo inclui obras eletroacústicas, mistas e instrumentais, explorando relações entre som, gesto e espaço.",
      martaWebsite: "WEBSITE ↗",
      martaWorks: "WORKS ↗",
      martaCesem: "CESEM ↗",
      martaMore: "MORE ↗",
      magistri:
        "Obra audiovisual inédita · prévia privada para discussão artística."
    },

    magistri: {
      title: "Uma possibilidade, não uma decisão.",
      marta:
        "Na sua perspectiva como compositora, MAGISTRI abre um diálogo interessante com a direção artística do ONÇA-LINCE?",
      ricarda:
        "Na sua perspectiva como harpista, você teria interesse em explorar uma possível versão desta obra para harpa?"
    },

    aspen: {
      question:
        "Aspen Tree poderia integrar o repertório do ONÇA-LINCE?",
      accordion:
        "O que a inclusão de um acordeonista poderia abrir musicalmente e performativamente?"
    },

    territories: {
      question:
        "Onde este trabalho deve nascer e estrear?"
    },

    economy: {
      "title": "ESCALA ECONÔMICA",
      "question": "Como distribuímos os recursos entre territórios, áreas e necessidades de produção?",
      "countriesTitle": "PAÍSES",
      "departmentsTitle": "DEPARTAMENTOS / ÁREAS",
      "areasTitle": "NECESSIDADES DE PRODUÇÃO",
      "labels": {"br": "Brasil", "pt": "Portugal", "de": "Alemanha", "art": "Arte / Criação", "technical": "Técnica", "production": "Produção", "international": "Internacional / Jurídico", "communication": "Comunicação", "fees": "Honorários", "travel": "Viagens", "accommodation": "Hospedagem", "equipment": "Equipamentos", "venues": "Espaços / Teatros", "materials": "Materiais / Cenografia"},
      eyebrow:
        "A escala econômica dentro da qual estamos criando"
    },

    scenography: {
      "title": "SCENOGRAPHY",
      "airTitle": "AIR / INFLATABLE",
      "textileTitle": "TEXTILE LANDSCAPE",
      "airLink": "VIEW REFERENCE ↗",
      "textileLink": "VANESSA BARRAGÃO ↗",
      "fabricationTitle": "FABRICATION",
      "tags": {
        "air": "AIR",
        "textile": "TEXTILE",
        "foldable": "FOLDABLE",
        "lightweight": "LIGHTWEIGHT",
        "volume": "VOLUME",
        "texture": "TEXTURE",
        "fiber": "FIBER",
        "landscape": "LANDSCAPE",
        "organic": "ORGANIC",
        "modular": "MODULAR",
        "print": "3D PRINT",
        "paper": "PAPER",
        "led": "LED",
        "arduino": "ARDUINO",
        "motors": "STEPPER MOTORS",
        "movement": "MOVEMENT"
      },
      "eyebrow": "Pesquisa cenográfica · 01 / 02",
      "question": "O que pode viajar em uma mala?",
      "airText": "Ar, tecido e volume como estrutura cenográfica leve, dobrável e transportável.",
      "airCaption": "01 / Estudo gráfico · referência visual externa",
      "textileCaption": "02 / Estudo gráfico · paisagem material",
      "textileText": "Uma segunda direção possível: construir paisagens têxteis e orgânicas a partir de elementos desmontáveis, pensando textura, volume e território sem depender de estruturas rígidas.",
      "textileNote": "Vanessa Barragão: referência de linguagem têxtil. Desmontagem, modularidade e transporte internacional são hipóteses para nossa cenografia, não características declaradas das obras da artista.",
      "fabricationText": "Essas linhas podem se combinar com componentes fabricados na própria rede: suportes impressos em 3D, papel reaproveitado, LEDs e movimento controlado por Arduino."
    },

    conservation: {
      eyebrow:
        "Arte · território · conservação",
      title:
        "A rede já iniciou aproximações com instituições ligadas à preservação dos dois animais.",
      question:
        "Como o conhecimento sobre conservação pode entrar no processo artístico?"
    },

    closing: {
      title: "O que precisamos encaminhar hoje?",
      q1: "Seguimos com a direção Onça × Lince?",
      q2: "Brasil ou Portugal como território de estreia?",
      q3: "O que queremos pesquisar primeiro?",
      q4: "Quem assume o próximo passo?",
      giveBack:
        "E se o espetáculo também pudesse devolver algo?",
      ticket:
        "Proposta para discussão: destinar uma porcentagem da bilheteria a uma instituição de preservação da onça-pintada e outra de preservação do lince-ibérico."
    }
  },


  en: {
    improvisation: {
      "harp": "HARP",
      "bassoon": "BASSOON",
      "electronics": "RHYTHMIC AND HARMONIC ELECTRONIC FOUNDATION",
      "eyebrow": "PROPOSAL",
      "title": "A TERRITORY FOR IMPROVISATION",
      "main": "What if harp and bassoon could meet through improvisation?",
      "secondary": "A rhythmic and harmonic electronic foundation created by Marta could become a shared territory for improvisation by Ricarda and Mariana.",
      "q1": "Marta — could this structure make sense within the composition?",
      "q2": "Ricarda — would you be interested in exploring this format?",
      "q3": "Mariana — how do you imagine the bassoon within this improvisational space?"
    },
    people: {
      martaRole: "Composition",
      lucimarRole: "Costume",
      "category": "COLLECTIVE · CURRENT CREATIVE TABLE",
      "zoeBio": "Zoë Melo is the founder of TOUCH, based in Los Angeles (USA), where she consults designers, brands and NGOs. Her work connects design and social-environmental impact, with a focus on projects seeking positive outcomes for people and the environment.",
      "ricardaBio": "Harpist active in chamber music and contemporary performance. She is a member of the Alveolar Trio, for flute, viola and harp.",
      "marianaBio": "Bassoonist active in contemporary repertoire and ensemble music, participating in a range of instrumental and interdisciplinary projects.",
      "caioBio": "Brazilian audiovisual artist and technician trained in Music Technologies at the Lisbon School of Music, working across spatial sound, video, 3D, digital fabrication and audiovisual production."
    },
    invitations: {
      "status": "POSSIBLE INVITATION · NOT CONFIRMED",
      "janelas": "JANELAS · bassoon + electronics",
      "magistri": "MAGISTRI · possible conversation",
      "title": "POSSIBLE INVITATIONS",
      "note": "These participations are not confirmed. They are possibilities for the group to discuss before any formal invitation.",
      "nunoBio": "Nuno Lobo is a Portuguese composer trained at ESMAE and the Conservatorium van Amsterdam. His work connects instrumental and vocal music with interdisciplinary formats.",
      "jaimeBio": "Jaime Reis is a Portuguese composer, Professor of Composition and Electroacoustic Music at ESML, and artistic director of Festival DME and Lisboa Incomum. Spatialisation and immersive sound systems play an important role in his work."
    },
    privacy: {
      "label": "INTERNAL MATERIAL · DO NOT CIRCULATE",
      "note": "This page contains working materials, artistic hypotheses and references under development for internal discussion within the Art & Performance Department. Please do not share unpublished material, private links or unconfirmed proposals outside this group."
    },
    network: {
      "caption": "a networked creation"
    },
    review: {
      "note": "Unpublished video · internal viewing · hypothesis under discussion. No adaptation or public use has been authorised at this stage.",
      "label": "under artistic consideration"
    },
    login: {"access": "Email or access", "password": "Password", "enter": "Enter", "logout": "Log out", "error": "Incorrect access details."},
    intro: {
      eyebrow: "Art & Performance Department · Session #01",
      title: "JAGUAR—LYNX",
      question: "How do the Jaguar and the Lynx perceive the world?"
    },

    collective: {
      eyebrow: "The collective",
      title: "Six perspectives for one creation"
    },

    animals: {
      question:
        "Rather than representing what these animals look like, could we investigate how they perceive the world?"
    },

    references: {
      vieiraStatus: "ARTISTIC REFERENCE / POSSIBLE INVITEE",
      vieiraRole: "composition · mixed music · electronics",
      vieiraBio: "Mariana Vieira is a Portuguese composer who studied Composition at the Escola Superior de Música de Lisboa with Carlos Caires and Jaime Reis. Her catalogue includes acousmatic, mixed and instrumental music, and her practice connects composition, technology and artistic production. Her music has been presented at international festivals and received distinctions in orchestral and electroacoustic composition.",
      vieiraHistory: "In 2016, Mariana Vieira presented a work for harp and electronics in the context of the Laboratório de Música Mista at ESML.",
      vieiraHistoryLink: "Harp + electronics · 2016 ↗",
      developmentCredit: "Website concept and development: Caio Rodrigues.",
      eyebrow: "Listen · observe · discuss",
      title: "References for the conversation",
      marta: "Selected works for listening and discussion.",
      martaBio: "Marta Domingues is a composer. She completed a Master’s degree in Composition at the Lisbon School of Music under the supervision of Jaime Reis and Annette Vande Gorne, as well as a Master’s degree in Music Education at the same institution. She is currently a PhD candidate at the Faculty of Fine Arts, University of Lisbon. Her catalogue includes electroacoustic, mixed and instrumental works, exploring relationships between sound, gesture and space.",
      martaWebsite: "WEBSITE ↗",
      martaWorks: "WORKS ↗",
      martaCesem: "CESEM ↗",
      martaMore: "MORE ↗",
      magistri:
        "Unpublished audiovisual work · private preview for artistic discussion."
    },

    magistri: {
      title: "A possibility, not a decision.",
      marta:
        "From your perspective as composer, does MAGISTRI open an interesting dialogue with the artistic direction of ONÇA-LINCE?",
      ricarda:
        "From your perspective as harpist, would you be interested in exploring a possible harp version of this work?"
    },

    aspen: {
      question:
        "Could Aspen Tree become part of the ONÇA-LINCE repertoire?",
      accordion:
        "What would adding an accordionist open up musically and performatively?"
    },

    territories: {
      question:
        "Where should this work be created and premiered?"
    },

    economy: {
      "title": "ECONOMIC SCALE",
      "question": "How do we distribute resources across territories, areas and production needs?",
      "countriesTitle": "COUNTRIES",
      "departmentsTitle": "DEPARTMENTS / AREAS",
      "areasTitle": "PRODUCTION AREAS",
      "labels": {"br": "Brazil", "pt": "Portugal", "de": "Germany", "art": "Art / Creation", "technical": "Technical", "production": "Production", "international": "International / Legal", "communication": "Communication", "fees": "Fees", "travel": "Travel", "accommodation": "Accommodation", "equipment": "Equipment", "venues": "Venues / Theatres", "materials": "Materials / Scenography"},
      eyebrow:
        "The economic scale within which we are creating"
    },

    scenography: {
      "title": "SCENOGRAPHY",
      "airTitle": "AIR / INFLATABLE",
      "textileTitle": "TEXTILE LANDSCAPE",
      "airLink": "VIEW REFERENCE ↗",
      "textileLink": "VANESSA BARRAGÃO ↗",
      "fabricationTitle": "FABRICATION",
      "tags": {
        "air": "AIR",
        "textile": "TEXTILE",
        "foldable": "FOLDABLE",
        "lightweight": "LIGHTWEIGHT",
        "volume": "VOLUME",
        "texture": "TEXTURE",
        "fiber": "FIBER",
        "landscape": "LANDSCAPE",
        "organic": "ORGANIC",
        "modular": "MODULAR",
        "print": "3D PRINT",
        "paper": "PAPER",
        "led": "LED",
        "arduino": "ARDUINO",
        "motors": "STEPPER MOTORS",
        "movement": "MOVEMENT"
      },
      "eyebrow": "Scenographic research · 01 / 02",
      "question": "What can travel in a suitcase?",
      "airText": "Air, textile and volume as a lightweight, foldable and transportable scenographic structure.",
      "airCaption": "01 / Graphic study · external visual reference",
      "textileCaption": "02 / Graphic study · material landscape",
      "textileText": "A second possible direction: building textile and organic landscapes from removable elements, exploring texture, volume and territory without depending on rigid structures.",
      "textileNote": "Vanessa Barragão: a reference for textile language. Disassembly, modularity and international transport are hypotheses for our scenography, not stated characteristics of the artist’s works.",
      "fabricationText": "These directions could be combined with components fabricated within the network itself: 3D-printed supports, reused paper, LEDs and Arduino-controlled movement."
    },

    conservation: {
      eyebrow:
        "Art · territory · conservation",
      title:
        "The network has already begun approaching institutions connected to the conservation of both animals.",
      question:
        "How can conservation knowledge enter the artistic process?"
    },

    closing: {
      title: "What do we need to move forward today?",
      q1: "Do we follow the Jaguar × Lynx direction?",
      q2: "Brazil or Portugal as the premiere territory?",
      q3: "What do we want to research first?",
      q4: "Who takes the next step?",
      giveBack:
        "What if the performance could also give something back?",
      ticket:
        "Proposal for discussion: direct a percentage of ticket revenue to one Jaguar conservation institution and one Iberian Lynx conservation institution."
    }
  },


  de: {
    improvisation: {
      "harp": "HARFE",
      "bassoon": "FAGOTT",
      "electronics": "RHYTHMISCHE UND HARMONISCHE ELEKTRONISCHE GRUNDLAGE",
      "eyebrow": "VORSCHLAG",
      "title": "EIN RAUM FÜR IMPROVISATION",
      "main": "Was wäre, wenn Harfe und Fagott sich durch Improvisation begegnen?",
      "secondary": "Eine von Marta entwickelte rhythmische und harmonische elektronische Grundlage könnte zu einem gemeinsamen Raum für die Improvisation von Ricarda und Mariana werden.",
      "q1": "Marta — könnte diese Struktur innerhalb der Komposition sinnvoll sein?",
      "q2": "Ricarda — hättest du Interesse, dieses Format zu erkunden?",
      "q3": "Mariana — wie stellst du dir das Fagott in diesem improvisatorischen Raum vor?"
    },
    people: {
      martaRole: "Komposition",
      lucimarRole: "Kostüm",
      "category": "KOLLEKTIV · AKTUELLE KREATIVE RUNDE",
      "zoeBio": "Zoë Melo ist Gründerin von TOUCH mit Sitz in Los Angeles (USA), wo sie Designer:innen, Marken und NGOs berät. Ihre Arbeit verbindet Design mit sozial-ökologischer Wirkung und konzentriert sich auf Projekte, die positive Auswirkungen für Menschen und Umwelt anstreben.",
      "ricardaBio": "Harfenistin mit Tätigkeit in Kammermusik und zeitgenössischer Aufführungspraxis. Sie ist Mitglied des Alveolar Trios für Flöte, Viola und Harfe.",
      "marianaBio": "Fagottistin mit Schwerpunkt auf zeitgenössischem Repertoire und Ensemblemusik sowie unterschiedlichen instrumentalen und interdisziplinären Projekten.",
      "caioBio": "Brasilianischer audiovisueller Künstler und Techniker mit Ausbildung in Musiktechnologien an der Escola Superior de Música de Lisboa, tätig in räumlichem Klang, Video, 3D, digitaler Fertigung und audiovisueller Produktion."
    },
    invitations: {
      "status": "MÖGLICHE EINLADUNG · NICHT BESTÄTIGT",
      "janelas": "JANELAS · Fagott + Elektronik",
      "magistri": "MAGISTRI · mögliches Gespräch",
      "title": "MÖGLICHE EINLADUNGEN",
      "note": "Diese Mitwirkungen sind noch nicht bestätigt. Es handelt sich um Möglichkeiten, die von der Gruppe vor einer formellen Einladung diskutiert werden sollen.",
      "nunoBio": "Nuno Lobo ist ein portugiesischer Komponist mit Ausbildung an der ESMAE und am Conservatorium van Amsterdam. Seine Arbeit verbindet Instrumental- und Vokalmusik mit interdisziplinären Formaten.",
      "jaimeBio": "Jaime Reis ist ein portugiesischer Komponist, Professor für Komposition und elektroakustische Musik an der ESML sowie künstlerischer Leiter des Festival DME und von Lisboa Incomum. Räumlichkeit und immersive Klangsysteme spielen eine wichtige Rolle in seiner Arbeit."
    },
    privacy: {
      "label": "INTERNES MATERIAL · NICHT WEITERGEBEN",
      "note": "Diese Seite enthält Arbeitsmaterialien, künstlerische Hypothesen und Referenzen in Entwicklung für die interne Diskussion der Abteilung Kunst & Performance. Bitte unveröffentlichte Materialien, private Links und noch nicht bestätigte Vorschläge nicht außerhalb dieser Gruppe weitergeben."
    },
    network: {
      "caption": "eine vernetzte Kreation"
    },
    review: {
      "note": "Unveröffentlichtes Video · interne Ansicht · Hypothese zur Diskussion. Bisher ist weder eine Bearbeitung noch eine öffentliche Nutzung genehmigt.",
      "label": "in künstlerischer Prüfung"
    },
    login: {"access": "E-Mail oder Zugang", "password": "Passwort", "enter": "Eintreten", "logout": "Abmelden", "error": "Ungültige Zugangsdaten."},
    intro: {
      eyebrow: "Abteilung Kunst & Performance · Treffen #01",
      title: "JAGUAR—LUCHS",
      question: "Wie nehmen Jaguar und Luchs die Welt wahr?"
    },

    collective: {
      eyebrow: "Das Kollektiv",
      title: "Sechs Perspektiven für eine gemeinsame Arbeit"
    },

    animals: {
      question:
        "Anstatt darzustellen, wie diese Tiere aussehen, könnten wir untersuchen, wie sie die Welt wahrnehmen?"
    },

    references: {
      vieiraStatus: "KÜNSTLERISCHE REFERENZ / MÖGLICHER GAST",
      vieiraRole: "Komposition · gemischte Musik · Elektronik",
      vieiraBio: "Mariana Vieira ist eine portugiesische Komponistin, die an der Escola Superior de Música de Lisboa bei Carlos Caires und Jaime Reis Komposition studierte. Ihr Werk umfasst akusmatische, gemischte und instrumentale Musik; ihre Arbeit verbindet Komposition, Technologie und künstlerische Produktion. Ihre Musik wurde bei internationalen Festivals aufgeführt und erhielt Auszeichnungen für orchestrale und elektroakustische Komposition.",
      vieiraHistory: "2016 präsentierte Mariana Vieira im Rahmen des Laboratório de Música Mista der ESML ein Werk für Harfe und Elektronik.",
      vieiraHistoryLink: "Harfe + Elektronik · 2016 ↗",
      developmentCredit: "Konzeption und Entwicklung der Website: Caio Rodrigues.",
      eyebrow: "Hören · beobachten · diskutieren",
      title: "Referenzen für das Gespräch",
      marta: "Ausgewählte Werke zum Hören und Diskutieren.",
      martaBio: "Marta Domingues ist Komponistin. Sie schloss ihren Master in Komposition an der Escola Superior de Música de Lisboa unter der Betreuung von Jaime Reis und Annette Vande Gorne ab und absolvierte dort auch einen Master in Musikpädagogik. Derzeit promoviert sie an der Fakultät für Bildende Künste der Universität Lissabon. Ihr Werkverzeichnis umfasst elektroakustische, gemischte und instrumentale Arbeiten, in denen sie Beziehungen zwischen Klang, Geste und Raum untersucht.",
      martaWebsite: "WEBSITE ↗",
      martaWorks: "WORKS ↗",
      martaCesem: "CESEM ↗",
      martaMore: "MORE ↗",
      magistri:
        "Unveröffentlichtes audiovisuelles Werk · private Voransicht für die künstlerische Diskussion."
    },

    magistri: {
      title: "Eine Möglichkeit, keine Entscheidung.",
      marta:
        "Öffnet MAGISTRI aus deiner Perspektive als Komponistin einen interessanten Dialog mit der künstlerischen Richtung von ONÇA-LINCE?",
      ricarda:
        "Hättest du aus deiner Perspektive als Harfenistin Interesse daran, eine mögliche Fassung dieses Werks für Harfe zu erforschen?"
    },

    aspen: {
      question:
        "Könnte Aspen Tree Teil des ONÇA-LINCE-Repertoires werden?",
      accordion:
        "Welche musikalischen und performativen Möglichkeiten könnte ein Akkordeon eröffnen?"
    },

    territories: {
      question:
        "Wo sollte diese Arbeit entstehen und uraufgeführt werden?"
    },

    economy: {
      "title": "WIRTSCHAFTLICHER RAHMEN",
      "question": "Wie verteilen wir die Ressourcen auf Territorien, Bereiche und Produktionsbedarfe?",
      "countriesTitle": "LÄNDER",
      "departmentsTitle": "ABTEILUNGEN / BEREICHE",
      "areasTitle": "PRODUKTIONSBEDARFE",
      "labels": {"br": "Brasilien", "pt": "Portugal", "de": "Deutschland", "art": "Kunst / Kreation", "technical": "Technik", "production": "Produktion", "international": "Internationales / Recht", "communication": "Kommunikation", "fees": "Honorare", "travel": "Reisen", "accommodation": "Unterkunft", "equipment": "Ausstattung", "venues": "Räume / Theater", "materials": "Materialien / Szenografie"},
      eyebrow:
        "Der wirtschaftliche Rahmen, in dem wir gestalten"
    },

    scenography: {
      "title": "SCENOGRAPHY",
      "airTitle": "AIR / INFLATABLE",
      "textileTitle": "TEXTILE LANDSCAPE",
      "airLink": "VIEW REFERENCE ↗",
      "textileLink": "VANESSA BARRAGÃO ↗",
      "fabricationTitle": "FABRICATION",
      "tags": {
        "air": "AIR",
        "textile": "TEXTILE",
        "foldable": "FOLDABLE",
        "lightweight": "LIGHTWEIGHT",
        "volume": "VOLUME",
        "texture": "TEXTURE",
        "fiber": "FIBER",
        "landscape": "LANDSCAPE",
        "organic": "ORGANIC",
        "modular": "MODULAR",
        "print": "3D PRINT",
        "paper": "PAPER",
        "led": "LED",
        "arduino": "ARDUINO",
        "motors": "STEPPER MOTORS",
        "movement": "MOVEMENT"
      },
      "eyebrow": "Szenografische Forschung · 01 / 02",
      "question": "Was kann in einem Koffer reisen?",
      "airText": "Luft, Textil und Volumen als leichte, faltbare und transportierbare szenografische Struktur.",
      "airCaption": "01 / Grafische Studie · externe visuelle Referenz",
      "textileCaption": "02 / Grafische Studie · materielle Landschaft",
      "textileText": "Eine zweite mögliche Richtung: textile und organische Landschaften aus demontierbaren Elementen zu entwickeln und dabei Textur, Volumen und Territorium ohne starre Strukturen zu erforschen.",
      "textileNote": "Vanessa Barragão: eine Referenz für textile Formensprache. Demontage, Modularität und internationaler Transport sind Hypothesen für unsere Szenografie, keine erklärten Eigenschaften der Werke der Künstlerin.",
      "fabricationText": "Diese Ansätze könnten mit Komponenten kombiniert werden, die innerhalb des Netzwerks selbst gefertigt werden: 3D-gedruckte Halterungen, wiederverwendetes Papier, LEDs und Arduino-gesteuerte Bewegung."
    },

    conservation: {
      eyebrow:
        "Kunst · Territorium · Naturschutz",
      title:
        "Das Netzwerk hat bereits erste Kontakte zu Institutionen aufgenommen, die sich mit dem Schutz beider Tierarten beschäftigen.",
      question:
        "Wie kann Wissen aus dem Naturschutz in den künstlerischen Prozess einfließen?"
    },

    closing: {
      title: "Was müssen wir heute weiterentwickeln?",
      q1: "Folgen wir der Richtung Jaguar × Luchs?",
      q2: "Brasilien oder Portugal als Ort der Premiere?",
      q3: "Was wollen wir zuerst erforschen?",
      q4: "Wer übernimmt den nächsten Schritt?",
      giveBack:
        "Was wäre, wenn die Aufführung auch etwas zurückgeben könnte?",
      ticket:
        "Vorschlag zur Diskussion: einen Prozentsatz der Ticketeinnahmen an eine Organisation zum Schutz des Jaguars und eine Organisation zum Schutz des Iberischen Luchses zu geben."
    }
  }
};


const loginScreen = document.querySelector("#login-screen");
const experience = document.querySelector("#experience");

const loginForm = document.querySelector("#login-form");
const loginError = document.querySelector("#login-error");

const horizontalTrack =
  document.querySelector(".horizontal-track");

const nav = document.querySelector("#section-nav");


// Prototype access control only.
// Credentials stored client-side are not secure authentication.
// Set email when an actual guest address is supplied; access remains valid.
const USERS = [
  {
    "id": "mariana",
    "name": "Mariana Tiago",
    "access": "mariana",
    "email": "",
    "password": "Vento56Nuvem"
  },
  {
    "id": "ricarda",
    "name": "Ricarda Kruitz",
    "access": "ricarda",
    "email": "",
    "password": "Prata94Pedra"
  },
  {
    "id": "rafael",
    "name": "Rafael Figueiredo",
    "access": "rafael",
    "email": "",
    "password": "Brisa73Ponte"
  },
  {
    "id": "caio",
    "name": "Caio Rodrigues",
    "access": "caio",
    "email": "",
    "password": "Cobre27Campo"
  },
  {
    "id": "marta",
    "name": "Marta Domingues",
    "access": "marta",
    "email": "",
    "password": "Cedro16Barco"
  },
  {
    "id": "zoe",
    "name": "Zoe Melo",
    "access": "zoe",
    "email": "",
    "password": "Trama71Verde"
  },
  {
    "id": "lucimar",
    "name": "Lucimar Maria",
    "access": "lucimar",
    "email": "",
    "password": "Folha61Areia"
  }
];
const USER_SESSION_KEY = "oncalince-art-performance-user";
const currentUserLabel = document.querySelector("#current-user");
let experienceInitialized = false;
let experienceContext;
let entryVersion = 0;

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const identifier = document.querySelector("#login-email").value.trim().toLowerCase();
  const password = document.querySelector("#login-password").value;
  const matchedUser = USERS.find(user =>
    [user.access, user.username, user.email].some(value =>
      value && value.trim().toLowerCase() === identifier
    ) && user.password === password
  );
  if (!matchedUser) {
    loginError.dataset.i18n = "login.error";
    loginError.textContent = translations[currentLanguage].login.error;
    return;
  }
  sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify({
    authenticated: true, userName: matchedUser.name, userId: matchedUser.id
  }));
  delete loginError.dataset.i18n;
  loginError.textContent = "";
  document.querySelector("#login-password").value = "";
  enterExperience(matchedUser);
});

function enterExperience(user) {
  if (experienceInitialized) return;
  experienceInitialized = true;
  const version = ++entryVersion;
  currentUserLabel.textContent = user.name;
  loginScreen.hidden = true;
  experience.hidden = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!experienceInitialized || version !== entryVersion) return;
      if (window.gsap) {
        experienceContext = gsap.context(() => initHorizontalExperience());
      }
      document.fonts?.ready.then(() => {
        if (experienceInitialized && version === entryVersion) window.ScrollTrigger?.refresh();
      });
    });
  });
}

function logout() {
  sessionStorage.removeItem(USER_SESSION_KEY);
  sessionStorage.removeItem("oncalince-art-performance-access");
  experienceInitialized = false;
  entryVersion++;
  scenographyContext?.revert();
  spatialArrayContext?.revert();
  experienceContext?.revert();
  experienceContext = undefined;
  horizontalTween = undefined;
  nav.replaceChildren();
  experience.hidden = true;
  loginScreen.hidden = false;
  currentUserLabel.textContent = "";
  document.querySelector("#login-password").value = "";
  delete loginError.dataset.i18n;
  loginError.textContent = "";
  window.scrollTo({ top: 0, behavior: "instant" });
  document.querySelector("#login-email").focus({ preventScroll: true });
}

document.querySelector("#logout-button").addEventListener("click", logout);

function restoreUserSession() {
  // The old shared login cannot identify an individual guest.
  sessionStorage.removeItem("oncalince-art-performance-access");
  try {
    const session = JSON.parse(sessionStorage.getItem(USER_SESSION_KEY));
    const user = session?.authenticated === true && USERS.find(item => item.id === session.userId);
    if (user) enterExperience(user);
    else sessionStorage.removeItem(USER_SESSION_KEY);
  } catch {
    sessionStorage.removeItem(USER_SESSION_KEY);
  }
}


/* IDIOMA */

let currentLanguage =
  localStorage.getItem("oncalince-language") || "pt";


/* Budget: the three groups are independent views of the same total. */
function formatBudgetEuro(value) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency", currency: "EUR", maximumFractionDigits: 2
  }).format(value).replace(/\.00$/, "");
}

function renderBudgetGroup(selector, items) {
  const list = document.querySelector(selector);
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const row = document.createElement("li");
    const label = document.createElement("span");
    label.dataset.i18n = `economy.labels.${item.id}`;
    label.textContent = getValue(translations[currentLanguage], label.dataset.i18n) || item.id;
    const amount = document.createElement("span");
    amount.className = "budget-amount";
    const defined = typeof item.value === "number" && Number.isFinite(item.value) && item.value >= 0;
    const percent = defined && Number.isFinite(budgetData.total) && budgetData.total > 0
      ? item.value / budgetData.total * 100 : null;
    amount.textContent = defined ? formatBudgetEuro(item.value) : "—";
    if (percent !== null) {
      const share = document.createElement("small");
      share.textContent = new Intl.NumberFormat(currentLanguage, { maximumFractionDigits: 2 }).format(percent) + "%";
      amount.appendChild(share);
    }
    const axis = document.createElement("span");
    axis.className = "budget-line";
    axis.setAttribute("aria-hidden", "true");
    if (percent !== null) {
      const fill = document.createElement("span");
      fill.style.width = `${Math.min(100, percent)}%`;
      axis.appendChild(fill);
    }
    row.append(label, amount, axis);
    fragment.appendChild(row);
  });
  list.replaceChildren(fragment);
}

function renderBudgetCountries() {
  const total = budgetData.total;
  document.querySelector("#budget-total").textContent =
    typeof total === "number" && Number.isFinite(total) && total >= 0 ? formatBudgetEuro(total) : "—";
  renderBudgetGroup("#budget-countries", budgetData.countries);
}

function renderBudgetDepartments() {
  renderBudgetGroup("#budget-departments", budgetData.departments);
}

function renderBudgetAreas() {
  renderBudgetGroup("#budget-areas", budgetData.productionAreas);
}

function getValue(object, path) {
  return path.split(".").reduce(
    (value, key) => value?.[key],
    object
  );
}


function applyLanguage(language) {
  currentLanguage = language;

  localStorage.setItem(
    "oncalince-language",
    language
  );

  document.documentElement.lang =
    language === "pt"
      ? "pt-BR"
      : language === "de"
      ? "de"
      : "en";

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      const value =
        getValue(
          translations[language],
          key
        );

      if (value) {
        element.textContent = value;
      }
    });


  document
    .querySelectorAll("[data-lang]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === language
      );
    });

  renderBudgetCountries();
  renderBudgetDepartments();
  renderBudgetAreas();
}


document
  .querySelectorAll("[data-lang]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {
        applyLanguage(
          button.dataset.lang
        );
      }
    );
  });


applyLanguage(currentLanguage);


/* EXPERIÊNCIA HORIZONTAL */

let horizontalTween;


function initHorizontalExperience() {

  if (!window.gsap || !window.ScrollTrigger) return;

  if (
    window.matchMedia(
      "(max-width: 800px)"
    ).matches
  ) {
    initScenography();
    initSpatialArrayAnimation();
    ScrollTrigger.refresh();
    return;
  }


  gsap.registerPlugin(ScrollTrigger);


  horizontalTween = gsap.to(
    horizontalTrack,
    {
      x: () =>
        -(
          horizontalTrack.scrollWidth -
          window.innerWidth
        ),

      ease: "none",

      scrollTrigger: {
        trigger: ".horizontal-shell",

        start: "top top",

        end: () =>
          `+=${
            horizontalTrack.scrollWidth -
            window.innerWidth
          }`,

        pin: true,
        scrub: 0.7,

        invalidateOnRefresh: true
      }
    }
  );


  initNavigation();
  initAnimations();
  initScenography();
  ScrollTrigger.refresh();
}


/* CENOGRAFIA — mídia local opcional e movimento restrito à seção. */

let scenographyContext;

function initScenography() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  scenographyContext?.revert();
  scenographyContext = gsap.matchMedia();

  scenographyContext.add({
    desktop: "(min-width: 801px)",
    mobile: "(max-width: 800px)",
    reduced: "(prefers-reduced-motion: reduce)"
  }, context => {
    const panel = document.querySelector(".panel-scenography");
    const { desktop, reduced } = context.conditions;
    const horizontal = desktop && horizontalTween;
    const position = horizontal
      ? { containerAnimation: horizontalTween, start: "left right", end: "right left" }
      : { start: "top bottom", end: "bottom top" };
    const videos = [...panel.querySelectorAll("video")];
    let active = false;
    let disposed = false;

    function syncVideo() {
      videos.forEach(video => {
        const shouldPlay = active && !reduced && !document.hidden && !disposed;
        if (!shouldPlay) {
          video.pause();
          return;
        }
        // Never load an external URL, even if one is accidentally configured.
        const source = video.dataset.src;
        if (!source) return;
        const url = new URL(source, document.baseURI);
        if (url.origin !== location.origin || !["http:", "https:", "file:"].includes(url.protocol)) return;
        video.muted = true;
        if (!video.getAttribute("src")) video.src = url.href;
        video.play()?.then(() => {
          if (active && !reduced && !document.hidden && !disposed) {
            video.hidden = false;
          } else {
            video.pause();
          }
        }).catch(() => { video.hidden = true; });
      });
    }

    function showFallback(event) { event.currentTarget.hidden = true; }
    videos.forEach(video => video.addEventListener("error", showFallback));
    const visibilityTrigger = ScrollTrigger.create({
      trigger: panel,
      ...position,
      onToggle(self) { active = self.isActive; syncVideo(); },
      onRefresh(self) { active = self.isActive; syncVideo(); }
    });
    active = visibilityTrigger.isActive;
    syncVideo();
    document.addEventListener("visibilitychange", syncVideo);

    if (!reduced) {
      panel.querySelectorAll(".scenography-media").forEach(media => {
        gsap.fromTo(media.querySelector(".scenography-visual"), { y: 8 }, {
          y: -8,
          ease: "none",
          scrollTrigger: { trigger: media, ...position, scrub: true }
        });
      });
      panel.querySelectorAll(".scenography-tags").forEach(tags => {
        gsap.fromTo(tags.children, { y: 6 }, {
          y: 0, immediateRender: false, stagger: .035,
          scrollTrigger: {
            trigger: tags,
            ...(horizontal
              ? { containerAnimation: horizontalTween, start: "left 95%", end: "left 65%" }
              : { start: "top 95%", end: "top 75%" }),
            scrub: true
          }
        });
      });
    }

    return () => {
      disposed = true;
      document.removeEventListener("visibilitychange", syncVideo);
      videos.forEach(video => {
        video.pause();
        video.hidden = true;
        video.removeEventListener("error", showFallback);
      });
    };
  });
}


/* NAVEGAÇÃO */

function initNavigation() {

  const panels =
    [...document.querySelectorAll(".panel")];

  nav.innerHTML = "";


  panels.forEach((panel, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.setAttribute(
      "aria-label",
      `Section ${index + 1}`
    );


    button.addEventListener(
      "click",
      () => {

        const totalHorizontal =
          horizontalTrack.scrollWidth -
          window.innerWidth;

        const panelCenter =
          panel.offsetLeft +
          panel.offsetWidth / 2;

        const ratio =
          Math.max(
            0,
            Math.min(
              1,
              (
                panelCenter -
                window.innerWidth / 2
              ) /
              totalHorizontal
            )
          );

        const trigger =
          horizontalTween.scrollTrigger;

        const targetScroll =
          trigger.start +
          ratio *
          (
            trigger.end -
            trigger.start
          );

        window.scrollTo({
          top: targetScroll,
          behavior: "smooth"
        });
      }
    );


    nav.appendChild(button);
  });


  updateNavigation();


  ScrollTrigger.create({
    trigger: ".horizontal-shell",

    start: "top top",

    end: () =>
      `+=${
        horizontalTrack.scrollWidth -
        window.innerWidth
      }`,

    onUpdate:
      updateNavigation
  });
}


function updateNavigation() {

  const panels =
    [...document.querySelectorAll(".panel")];

  const buttons =
    [...nav.querySelectorAll("button")];


  const viewportCenter =
    -gsap.getProperty(
      horizontalTrack,
      "x"
    ) +
    window.innerWidth / 2;


  let closestIndex = 0;
  let closestDistance = Infinity;


  panels.forEach(
    (panel, index) => {

      const panelCenter =
        panel.offsetLeft +
        panel.offsetWidth / 2;

      const distance =
        Math.abs(
          viewportCenter -
          panelCenter
        );


      if (
        distance <
        closestDistance
      ) {
        closestDistance =
          distance;

        closestIndex =
          index;
      }
    }
  );


  buttons.forEach(
    (button, index) => {

      button.classList.toggle(
        "active",
        index === closestIndex
      );
    }
  );
}


/* PAUSA ESPACIAL — posições e movimento derivados apenas do progresso. */

const spatialArrayConfig = {
  radius: 255,
  perspective: 1200,
  mobilePerspective: 900,
  rotationYStart: -175,
  rotationYEnd: 175,
  rotationXStart: 16,
  rotationXEnd: -14,
  mobileRotationFactor: 0.45,
  nearScale: 1.2,
  farScale: 0.66,
  nearOpacity: 1,
  farOpacity: 0.34,
  speakerWidth: 42,
  speakerHeight: 68,
  subwooferWidth: 72,
  subwooferHeight: 82,
  mobileBoxScale: 0.58,
  widthFit: 0.34,
  heightFit: 0.29,
  verticalSpread: 1.12,
  staticProgress: 0.52,
  inwardTilt: 12,
  subwooferDrop: 0.58,
  subwooferDepth: 0.12,
  subwooferMotion: 0.2,
  depthCompression: 0.82
};

// Balanced spherical distribution; angles are degrees, radii are relative.
const speakerPoints = [
  { azimuth: 15.0, elevation: 69.64, radius: 0.97 },
  { azimuth: 152.51, elevation: 54.34, radius: 0.995 },
  { azimuth: 290.02, elevation: 43.43, radius: 1.02 },
  { azimuth: 67.52, elevation: 34.23, radius: 0.97 },
  { azimuth: 205.03, elevation: 25.94, radius: 0.995 },
  { azimuth: 342.54, elevation: 18.21, radius: 1.02 },
  { azimuth: 120.05, elevation: 10.81, radius: 0.97 },
  { azimuth: 257.55, elevation: 3.58, radius: 0.995 },
  { azimuth: 35.06, elevation: -3.58, radius: 1.02 },
  { azimuth: 172.57, elevation: -10.81, radius: 0.97 },
  { azimuth: 310.08, elevation: -18.21, radius: 0.995 },
  { azimuth: 87.59, elevation: -25.94, radius: 1.02 },
  { azimuth: 225.09, elevation: -34.23, radius: 0.97 },
  { azimuth: 2.6, elevation: -43.43, radius: 0.995 },
  { azimuth: 140.11, elevation: -54.34, radius: 1.02 },
  { azimuth: 277.62, elevation: -69.64, radius: 0.97 }
];

let spatialArray;
let spatialArrayContext;

function sphericalToCartesian(azimuth, elevation, radius) {
  const az = azimuth * Math.PI / 180;
  const el = elevation * Math.PI / 180;
  return {
    x: radius * Math.cos(el) * Math.sin(az),
    y: -radius * Math.sin(el),
    z: radius * Math.cos(el) * Math.cos(az)
  };
}

function createSpeaker(isSubwoofer = false) {
  const speaker = document.createElement("div");
  speaker.className = isSubwoofer
    ? "spatial-speaker spatial-subwoofer"
    : "spatial-speaker";
  return speaker;
}

function createSpatialArray() {
  const stage = document.querySelector(".spatial-stage");
  if (!stage || spatialArray) return;
  const system = stage.querySelector(".speaker-system");
  const speakers = speakerPoints.map(point => {
    const element = createSpeaker();
    system.appendChild(element);
    return { element, point: sphericalToCartesian(point.azimuth, point.elevation, point.radius) };
  });
  const subwoofer = createSpeaker(true);
  system.appendChild(subwoofer);
  spatialArray = { stage, system, speakers, subwoofer, radius: spatialArrayConfig.radius, mobile: false, reduced: false };
}

function updateSpatialArray(progress) {
  if (!spatialArray) return;
  const config = spatialArrayConfig;
  const { speakers, subwoofer, radius, mobile, reduced } = spatialArray;
  const p = reduced ? config.staticProgress : Math.max(0, Math.min(1, progress));
  const lerp = (start, end, t) => start + (end - start) * t;
  const amplitude = mobile ? config.mobileRotationFactor : 1;
  const ry = lerp(config.rotationYStart, config.rotationYEnd, p) * amplitude * Math.PI / 180;
  const rx = lerp(config.rotationXStart, config.rotationXEnd, p) * amplitude * Math.PI / 180;
  const compression = lerp(config.depthCompression, 1, Math.sin(p * Math.PI));

  speakers.forEach(({ element, point }) => {
    // Rotate coordinates, preserving a readable, slightly inward-facing cabinet.
    const x = point.x * Math.cos(ry) + point.z * Math.sin(ry);
    const depth = point.z * Math.cos(ry) - point.x * Math.sin(ry);
    const y = point.y * Math.cos(rx) - depth * Math.sin(rx);
    const z = (point.y * Math.sin(rx) + depth * Math.cos(rx)) * compression;
    const proximity = Math.max(0, Math.min(1, (z + 1) / 2));
    const scale = lerp(config.farScale, config.nearScale, proximity);
    element.style.transform = `translate3d(${x * radius}px, ${y * radius * config.verticalSpread}px, ${z * radius}px) translate(-50%, -50%) rotateY(${-x * config.inwardTilt}deg) rotateX(${y * config.inwardTilt}deg) scale(${scale})`;
    element.style.opacity = lerp(config.farOpacity, config.nearOpacity, proximity);
    element.style.zIndex = Math.round(proximity * 100);
  });

  const subX = Math.sin(ry) * radius * config.subwooferMotion;
  subwoofer.style.transform = `translate3d(${subX}px, ${radius * config.subwooferDrop}px, ${radius * config.subwooferDepth}px) translate(-50%, -50%) rotateY(${-Math.sin(ry) * config.inwardTilt}deg)`;
  subwoofer.style.zIndex = Math.round((config.subwooferDepth + 1) * 50);
}

function initSpatialArrayAnimation() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  createSpatialArray();
  if (!spatialArray) return;
  spatialArrayContext?.revert();
  spatialArrayContext = gsap.matchMedia();
  spatialArrayContext.add({
    desktop: "(min-width: 801px)",
    mobile: "(max-width: 800px)",
    reduced: "(prefers-reduced-motion: reduce)"
  }, context => {
    const config = spatialArrayConfig;
    const { mobile, reduced } = context.conditions;
    spatialArray.mobile = mobile;
    spatialArray.reduced = reduced;

    function fitSpatialArray() {
      const { stage } = spatialArray;
      spatialArray.radius = Math.min(config.radius, stage.clientWidth * config.widthFit, stage.clientHeight * config.heightFit);
      stage.style.setProperty("--spatial-perspective", `${mobile ? config.mobilePerspective : config.perspective}px`);
      const size = mobile ? config.mobileBoxScale : 1;
      for (const [name, value] of Object.entries({
        "speaker-width": config.speakerWidth,
        "speaker-height": config.speakerHeight,
        "subwoofer-width": config.subwooferWidth,
        "subwoofer-height": config.subwooferHeight
      })) stage.style.setProperty(`--${name}`, `${value * size}px`);
    }

    fitSpatialArray();
    updateSpatialArray(config.staticProgress);
    ScrollTrigger.create({
      trigger: ".panel-spatial-array",
      ...(!mobile && horizontalTween
        ? { containerAnimation: horizontalTween, start: "left right", end: "right left" }
        : { start: "top bottom", end: "bottom top" }),
      scrub: true,
      onUpdate: self => { if (!reduced) updateSpatialArray(self.progress); },
      onRefresh: self => {
        fitSpatialArray();
        updateSpatialArray(self.progress);
      }
    });
  });
}


/* ANIMAÇÕES */

function initAnimations() {

  initSpatialArrayAnimation();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.fromTo(".improvisation-orbit", { rotation: -8, y: 8 }, {
    rotation: 8, y: -8, ease: "none", immediateRender: false,
    scrollTrigger: {
      trigger: ".panel-improvisation",
      containerAnimation: horizontalTween,
      start: "left right", end: "right left", scrub: true
    }
  });

  const panels =
    document.querySelectorAll(".panel");


  panels.forEach(panel => {

    if (panel.matches(".panel-scenography")) return;

    const elements =
      panel.querySelectorAll(
        "h2, .large-question, .hero-question, .reference-item, .people-grid > div, .territory, .keywords span"
      );


    if (!elements.length) return;

    // Entrance movement is decorative: text never depends on tween opacity.
    gsap.fromTo(
      elements,
      { y: 24 },
      {
        y: 0,
        immediateRender: false,

        stagger: 0.04,

        scrollTrigger: {
          trigger: panel,
          containerAnimation:
            horizontalTween,

          start: "left 95%",
          end: "left 55%",

          scrub: true
        }
      }
    );
  });


  gsap.to(
    ".organism-orbit",
    {
      rotation: 35,

      scrollTrigger: {
        trigger:
          ".panel-intro",

        containerAnimation:
          horizontalTween,

        start: "left left",
        end: "right left",

        scrub: true
      }
    }
  );
}


// Restore only after language, animation configuration and state are initialized.
restoreUserSession();
