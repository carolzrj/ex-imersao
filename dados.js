let dados = [
    {
        titulo: "Rio de Janeiro",
        descricao: "O Rio de Janeiro é um dos destinos turísticos mais populares do Brasil e do mundo, com uma combinação irresistível de natureza exuberante, cultura vibrante e uma atmosfera contagiante. Seus famosos cartões postais, como o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema, atraem milhões de visitantes anualmente. Além dos pontos turísticos clássicos, a cidade oferece uma rica gastronomia, uma vida noturna agitada e uma variedade de atividades para todos os gostos, desde trilhas em meio à natureza até eventos culturais e esportivos.",
        atracoes: "https://www.google.com/search?q=atra%C3%A7%C3%B5es+turisticas+rio+de+janeiro&rlz=1C1RXQR_pt-PTBR1072BR1072&oq=atra%C3%A7%C3%B5es+turis&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU3NzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
        gastronomia: "https://www.google.com/search?q=maiores+indica%C3%A7%C3%B5es+gastron%C3%B4micas+no+rio+de+janeiro&sca_esv=41706f494ee2e9ff&rlz=1C1RXQR_pt-PTBR1072BR1072&sxsrf=ADLYWIIz9JeHq9iKabdQ6eP7XbtR2xvPEg%3A1725366481102&ei=0QDXZob2BYDY1sQP2arv4A8&ved=0ahUKEwjGotqB46aIAxUArJUCHVnVG_wQ4dUDCBA&uact=5&oq=maiores+indica%C3%A7%C3%B5es+gastron%C3%B4micas+no+rio+de+janeiro&gs_lp=Egxnd3Mtd2l6LXNlcnAiNW1haW9yZXMgaW5kaWNhw6fDtWVzIGdhc3Ryb27DtG1pY2FzIG5vIHJpbyBkZSBqYW5laXJvMggQIRigARjDBEizOVDOElj4N3ABeAGQAQCYAaoBoAHeB6oBAzAuN7gBA8gBAPgBAZgCB6AC4gbCAgoQABiwAxjWBBhHwgIIEAAYgAQYogTCAggQABiiBBiJBcICChAhGKABGMMEGAqYAwCIBgGQBgiSBwMxLjagB4Id&sclient=gws-wiz-serp",
        noturna: "https://tirolesa.bondinho.com.br/blog/o-que-fazer-no-rio-de-janeiro-a-noite/",
        tags: "rio rj"
    },
    {
        titulo: "Salvador",
        descricao: "Salvador, a primeira capital do Brasil, é um verdadeiro caldeirão cultural, com uma rica história, música contagiante e uma culinária afro-brasileira única. O Pelourinho, centro histórico da cidade, é um Patrimônio Mundial da UNESCO e abriga construções coloniais, museus e restaurantes. As praias, como a de Porto da Barra e a do Farol da Barra, oferecem paisagens deslumbrantes e uma atmosfera relaxante.",
        atracoes: "https://www.google.com/search?q=atra%C3%A7%C3%B5es%20tur%C3%ADsticas%20em%20salvador",
        gastronomia: "https://www.google.com/search/sv/gastronomia+salvador&rlz=1C1RXQR_pt-PTBR1072BR1072&sxsrf=ADLYWIIz9JeHq9iKabdQ6P7XbtR2xvPEg%A1725366481102&ei=0QDXZob2BYDY1sQP2arv4A8&ved=0ahUKEwjGotqB46aIAxUArJUCHVnVG_4dUDCBA&uact=5&oq=gastronomia+salvador&gs_lcp=Egxnd3Mtd2l6LXNlYXJpbmciNW1haW9yZXMgaWdicaWN5C2Fmdm8tYnJhc2lsaWVyYSB3C3Jhc2lsaiaQIRigARjDBEizOVDOElj4N3ABeAGQAQCYAaoBoAHeB6oBAzAuN7gBA8gBAPgBAZgCB6AC4ACIAgICCAAyBwgCEAAYgAQYogTCAggQABiiBBiJBcICChAhGKABGMMEGAqYAwCIBgGQBgiSBwMxLjagB4Id&sc0client=gws-wiz-serp",
        noturna: "https://www.tripadvisor.com.br/Attractions-g303846-Nightlife-Salvador_Bahia.html",
        tags: "ssa"
      },
      {
        titulo: "São Paulo",
        descricao: "São Paulo é a maior cidade da América Latina e um importante centro financeiro e cultural do Brasil. A cidade oferece uma grande variedade de museus, teatros, restaurantes e opções de compras. A vida noturna é agitada, com diversas opções de bares, clubes e shows. A gastronomia é diversificada, com influências de diversas culturas.",
        atracoes: "https://www.google.com/search?q=atra%C3%A7%C3%B5es+tur%C3%ADsticas+em+sao+paulo&rlz=1C1RXQR_pt-PTBR1072BR1072&oq=atra%C3%A7%C3%B5es+tur%C3%ADsticas+em+sao+paulo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCggCEAAYDxgWGB4yCAgDEAAYFhgeMgoIBBAAGIAEGKIEMgoIBRAAGIAEGKIE0gEINjUwMGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8",
        gastronomia: "https://www.melhoresdestinos.com.br/guia-gastronomico-de-sao-paulo/",
        noturna: "https://www.timeout.com.br/sao-paulo/coisas-para-fazer/baladas-em-sao-paulo",
        tags: "sp sao paulo"
      },
      {
        titulo: "Fortaleza",
        descricao: "Fortaleza, a capital do Ceará, é conhecida por suas belas praias, como a de Iracema e a do Futuro, e por sua rica cultura. A cidade oferece uma variedade de opções de lazer, como trilhas, passeios de barco e jangadas. A culinária cearense é famosa por seus pratos à base de frutos do mar e por sua bebida típica, a cachaça.",
        atracoes: "https://www.google.com/search?q=atra%C3%A7%C3%B5es+tur%C3%ADsticas+em+fortaleza&sca_esv=c7a01837b1eb8e0f&rlz=1C1RXQR_pt-PTBR1072BR1072&sxsrf=ADLYWIJXuuL1tM4ocTdpRWIGUTzSS4kLtg%3A1725451235272&ei=40vYZuumELTM1sQP5reruAU&ved=0ahUKEwirpNLfnqmIAxU0ppUCHebbClcQ4dUDCBA&uact=5&oq=atra%C3%A7%C3%B5es+tur%C3%ADsticas+em+fortaleza&gs_lp=Egxnd3Mtd2l6LXNlcnAiI2F0cmHDp8O1ZXMgdHVyw61zdGljYXMgZW0gZm9ydGFsZXphMgUQABiABDIGEAAYFhgeMggQABiABBiiBDIIEAAYgAQYogRIyBBQpwRYtg9wAXgBkAEAmAHiAaABxwqqAQUwLjguMbgBA8gBAPgBAZgCCqAC5ArCAgoQABiwAxjWBBhHwgIKEAAYFhgKGB4YD5gDAIgGAZAGCJIHBTEuOC4xoAflJg&sclient=gws-wiz-serp",
        gastronomia: "https://www.google.com/search?q=guia+gastronomico+fortaleza&sca_esv=c7a01837b1eb8e0f&rlz=1C1RXQR_pt-PTBR1072BR1072&sxsrf=ADLYWIIaOzis_7lftL2nGXe01SUsqbofXA%3A1725451359472&ei=X0zYZs7BHMDU1sQP6oLziAw&ved=0ahUKEwiO7e6an6mIAxVAqpUCHWrBHMEQ4dUDCBA&uact=5&oq=guia+gastronomico+fortaleza&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2d1aWEgZ2FzdHJvbm9taWNvIGZvcnRhbGV6YTIKECEYoAEYwwQYCjIKECEYoAEYwwQYCkjMIlCkCFj8IHACeAGQAQCYAYsCoAH_FaoBBjAuMTcuMbgBA8gBAPgBAZgCDaACyA3CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAsICExAuGIAEGLADGEMYyAMYigXYAQLCAgYQABgHGB7CAgoQLhiABBixAxgNwgIKEAAYgAQYsQMYDcICDRAuGIAEGLEDGIMBGA3CAhAQLhiABBjHARgNGI4FGK8BwgIQEAAYgAQYsQMYgwEYigUYDcICDRAAGIAEGLEDGIMBGA3CAgcQABiABBgNwgIGEAAYAxgNwgIZEC4YgAQYsQMYDRiXBRjcBBjeBBjgBNgBA8ICBRAAGIAEwgIIEAAYBxgIGB7CAggQABgFGA0YHsICEBAuGAUYxwEYChgNGB4YrwHCAggQABgIGA0YHsICDRAuGIAEGMcBGA0YrwHCAgYQABgNGB7CAggQABgNGB4YD5gDAIgGAZAGELoGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFJIHBDIuMTGgB9N6&sclient=gws-wiz-serp",
        noturna: "https://www.tripadvisor.com.br/Attractions-g303293-Activities-c20-Fortaleza_State_of_Ceara.html",
        tags: "fl"
      }
]