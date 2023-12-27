import { ComponentMeta } from "@storybook/react";

import AppLogo from "./index";

export default { title: "atoms/AppLogo" } as ComponentMeta<typeof AppLogo>;

export const Logo = () => <AppLogo />;
