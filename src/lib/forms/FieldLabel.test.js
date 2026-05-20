/*
 * SPDX-FileCopyrightText: 2020 CERN.
 * SPDX-FileCopyrightText: 2020 Northwestern University.
 * SPDX-License-Identifier: MIT
 */

import { createRoot } from "react-dom/client";
import { FieldLabel } from "./FieldLabel";

it("renders without crashing with no props", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<FieldLabel />);
  root.unmount();
});

it("renders without crashing with all props", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <FieldLabel htmlFor="foo" icon="american sign language interpreting" label="Foo" />
  );
  root.unmount();
});
