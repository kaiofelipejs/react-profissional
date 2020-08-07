import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components|Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
      consequatur facilis quia, doloribus fugit, asperiores impedit, magnam
      saepe cum porro rem. Illo, odio dicta! Culpa sit pariatur incidunt
      dolorum.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
      consequatur facilis quia, doloribus fugit, asperiores impedit, magnam
      saepe cum porro rem. Illo, odio dicta! Culpa sit pariatur incidunt
      dolorum.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
      consequatur facilis quia, doloribus fugit, asperiores impedit, magnam
      saepe cum porro rem. Illo, odio dicta! Culpa sit pariatur incidunt
      dolorum.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
      consequatur facilis quia, doloribus fugit, asperiores impedit, magnam
      saepe cum porro rem. Illo, odio dicta! Culpa sit pariatur incidunt
      dolorum.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
      consequatur facilis quia, doloribus fugit, asperiores impedit, magnam
      saepe cum porro rem. Illo, odio dicta! Culpa sit pariatur incidunt
      dolorum.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
      consequatur facilis quia, doloribus fugit, asperiores impedit, magnam
      saepe cum porro rem. Illo, odio dicta! Culpa sit pariatur incidunt
      dolorum.
    </Accordion>
  </AccordionGroup>
);
