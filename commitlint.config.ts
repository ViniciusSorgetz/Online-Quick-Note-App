import type { UserConfig } from "@commitlint/types"; 
import { RuleConfigSeverity } from "@commitlint/types"; 

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [RuleConfigSeverity.Error, "always", ["sentence-case"]], 
  },
};

export default Configuration;