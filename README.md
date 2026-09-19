# Casa do Pátio

Demo comercial de restaurante português contemporâneo. Next.js 16, React 19, TypeScript e Tailwind 4. Exportação estática, sem backend ou serviços de reserva reais.

## Utilização

Node.js 22 ou superior. `npm ci`, `npm run dev`, `npm run build`. A versão estática é gerada em `out/`. `npm run typecheck` verifica os tipos; `npm test` verifica regras do percurso de reserva.

## Organização

- `lib/restaurant.ts`: configuração por restaurante — identidade, tema, variantes de layout, contactos, localização, reservas, ações mobile, reputação, horários, imagens e menu bilingue.
- `lib/copy.ts`: textos editoriais partilhados.
- `lib/metadata.ts`: títulos, descrições, canonical e idiomas alternativos.
- `lib/analytics.ts`: eventos neutros (`restaurant:event`) prontos para ligar mais tarde a uma plataforma de analytics, sem enviar dados por si só.
- `components/`: apresentação e percursos de interação.
- `app/`: homepage, rotas PT/EN, páginas legais, sitemap, robots e 404.
- `public/images/`: imagens responsivas WebP, servidas localmente, sem pedidos a bancos de imagens externos.
- `lib/booking.mjs`: validação partilhada entre interface e ferramenta WebMCP opcional.

## Percursos

Homepage em `/` e `/en/`; menu em `/pt/menu/` e `/en/menu/`; reservas em `/pt/reservas/` e `/en/reservas/`. Políticas em cada idioma. Secções de história, galeria, localização, horário e FAQ na homepage.

Reservas: seleção de data, hora e pessoas, rejeição de datas passadas, segundas-feiras, horários decorridos e grupos fora de 1–8. Horizonte de 90 dias. A confirmação é exclusivamente demonstrativa; não recolhe contactos, não envia pedidos, não confirma mesas reais e perde-se ao recarregar.

Telefone e WhatsApp ficam sem número na demo. Os botões explicam a integração; configurar números reais ativa ligações `tel:` e `wa.me`. O mapa aponta para o bairro, sem atribuir uma morada real à marca fictícia. A reputação é configurável e os dados desta versão estão identificados como demonstrativos.

## Identidade e imagens

Marca fictícia. As três fotografias foram geradas com ImageGen para este projeto e não representam um restaurante real. Derivadas em WebP a 640, 1200 e 1600 px. Não foram copiados textos, fotografias, marcas ou layouts de Dishoom, Noma ou Belcanto. Estas referências orientaram apenas narrativa, fotografia editorial e contenção visual.

Sem testemunhos reais, classificações inventadas ou prémios. O testemunho demonstrativo está identificado. Os preços e alergénios são ilustrativos e devem ser substituídos e confirmados pelo restaurante.

## SEO e privacidade

Demo com `noindex` e robots restritivo para não apresentar a marca como estabelecimento real. Metadados bilingues, canonical, hreflang, sitemap e favicon. Não se publicam dados estruturados de um restaurante real enquanto a identidade for fictícia. A versão do cliente deverá ativar indexação e dados Restaurant com morada, contactos e horários verificados.

Sem analytics, cookies próprios, armazenamento local, formulários persistentes ou mapas incorporados. O alojamento pode ter controlo de acesso e tratamento técnico próprios. Os textos legais descrevem a demo; devem ser adaptados ao operador e serviços reais antes do lançamento comercial.

## Próximas fases

1. Conteúdo e fotografia reais, endereço, contactos, exceções de horário e validação das receitas.
2. Prestador de reservas real, autenticação e persistência apenas quando necessários.
3. Domínio duradouro controlado pela plataforma para `/r/{qrId}`; nunca imprimir QR com o domínio final do restaurante. Redirecionamento temporário 302/307 com destino validado, autenticação e autorização para alterações, histórico e testes de migração. Esta infraestrutura ainda não está implementada.
4. Supabase para conteúdos e administração, com políticas RLS por restaurante e credenciais de servidor fora do frontend. Nenhuma ligação Supabase está simulada nesta demo.
5. Gestão de clientes e subscrições depois de validar o produto comercial.

Manter backups e renovação do domínio permanente dos QR. Uma alteração do frontend não deverá alterar IDs nem destinos do serviço independente de redirecionamento.
