# Auditoria Geral de Design e UX

Baseada nos protocolos @[/frontend-design], @[/seo-fundamentals] e @[/web-design-guidelines].

## 🎨 1. Frontend Design & UX Psychology
**Status: Melhoria Necessária**

### Visceral (Primeira Impressão)
- **Paleta de Cores:** A combinação Royal Blue + Red está muito "Industrial/Entrega" (lembra marcas como Domino's ou correios). Para um serviço "Elite", falta sofisticação. 
- **Layout Predictivity:** O Hero dividido (texto à esquerda, imagem à direita) é um clichê de IA. Falta uma narrativa visual mais arrojada ou tipografia massiva.
- **Bento Cliché:** O grid de serviços está funcional, mas visualmente genérico.

### Leis de UX
- **Leis de Fitts:** Os botões principais são grandes, mas os ícones sociais no footer têm áreas de clique reduzidas.
- **Miller's Law:** A seção de serviços com 5 itens está dentro do limite (7±2), mas a densidade de informação nas colunas é alta para mobile.
- **Von Restorff:** O botão de WhatsApp vermelho destaca-se bem, mas compete com a cor de destaque do logo e títulos.

---

## 🔍 2. SEO Fundamentals
**Status: Incompleto**

- **Metadata:** Atualmente os títulos são básicos. Necessário incluir palavras-chave geográficas (Ex: "Limpeza de Sofás em Marília-SP") diretamente no `<title>` e `meta name="description"`.
- **Hierarquia:** O uso de `<h1>` está correto (apenas um por página).
- **Alt Text:** As imagens possuem alt text, mas podem ser mais ricas para busca (Ex: "Limpeza profunda de sofá de tecido cinza em Marília").
- **Schema.json-ld:** Ausência de `LocalBusiness` schema, essencial para SEO local de prestadores de serviço delivery.

---

## ✅ 3. Web Interface Guidelines (Vercel)
**Status: Violado (Detalhes Técnicos)**

- **Tipografia:** 
    - Uso de `...` em vez do caractere tipográfico correto `…`.
    - Falta de `text-wrap: balance` ou `text-pretty` em títulos longos para evitar "viúvas" (palavras isoladas em linhas novas).
- **Acessibilidade:**
    - Ícones da Lucide precisam de `aria-hidden="true"` quando são puramente decorativos.
    - Botões de redes sociais e "Saber Mais" precisam de `aria-label` descritivos.
- **Performance:**
    - Faltam especificações de `width` e `height` em alguns componentes de imagem abaixo da dobra para evitar CLS (Cumulative Layout Shift).
- **Interação:**
    - Falta de estados `:focus-visible` refinados. O foco padrão do navegador pode quebrar a estética premium.

---

## 💡 Sugestões de Próximos Passos

1. **Refinar a Paleta:** Trocar o Royal Blue por um **Deep Navy (#001B3D)** e o Safety Red por um **Crimson Premium (#9E1B1B)** para elevar o tom de "Luxo/Autoridade".
2. **Tipografia:** Usar fontes mais modernas de display (como *Outfit* ou *Bento*) com pesos variados.
3. **Layout:** Abandonar o split-hero clássico por um layout "Full-Bleed" ou com tipografia sobreposta à imagem tratada.
4. **SEO Local:** Implementar o JSON-LD de `LocalBusiness`.

---
> [!IMPORTANT]
> A estética atual está "segura demais". Para ser memorável e converter o público de Marília, o design precisa de mais personalidade e contrastes controlados.
