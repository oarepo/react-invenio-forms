/*
 * SPDX-FileCopyrightText: 2020 CERN.
 * SPDX-FileCopyrightText: 2020 Northwestern University.
 * SPDX-License-Identifier: MIT
 */

import { createRoot } from "react-dom/client";
import { RadioField } from "./RadioField";

import { Form, Formik } from "formik";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <Formik>
      {() => (
        <Form>
          <RadioField
            checked
            fieldPath="testFieldPath"
            label="testLabel"
            labelIcon="money"
            optimized={false}
            onChange={() => null}
            value="testValue"
          />
        </Form>
      )}
    </Formik>,
  );
  root.unmount();
});
