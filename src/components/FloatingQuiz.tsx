# Checklist de Reestruturação Premium - Clean Lourenço

## 🎨 Fase 1: Identidade Visual & Cores (Autoridade)
- [ ] Atualizar `globals.css` com paleta Premium (Navy #001B3D + Crimson #9E1B1B).
- [ ] Refinar tokens de sombra e arredondamento (mais sutis e elegantes).
- [ ] Adicionar sistema de tipografia com `text-wrap: balance` e `text-pretty`.

## 🖼️ Fase 2: Redesign Estrutural (Impacto)
- [ ] **Hero Redesign**: Implementar layout arrojado (Full-bleed ou tipografia massiva).
- [ ] **Section Rhythm**: Aumentar o espaçamento entre seções (whitespace luxuoso).
- [ ] **Interactive States**: Implementar `focus-visible` e estados de hover mais sutis.

## ⚙️ Fase 3: Otimização Técnica & SEO (Qualidade)
- [ ] **SEO Local (Marília)**: Atualizar metadados no `layout.tsx` e `page.tsx`.
- [ ] **Acessibilidade**: Adicionar `aria-hidden` em ícones e `aria-label` em links sociais.
- [ ] **Tipografia Vercel**: Trocar `...` por `…` e garantir uso de ativos `Intl` se necessário.
- [ ] **Imagens**: Garantir dimensões explícitas para evitar CLS.

## ✅ Fase 4: Verificação Final
- [ ] Auditoria final de performance e acessibilidade.
- [ ] Build de produção final.
