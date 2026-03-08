/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**"],
  rules: {
    "number-max-precision": 6
  }
};
