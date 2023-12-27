import { ComponentMeta } from "@storybook/react";

import Header from "./index";

export default { title: "organisms/Header" } as ComponentMeta<typeof Header>;
export const HeaderComponent = () => <Header />;
