import { works } from "@typescript-import-bug/lib/works"; // succeeds
import { fails } from "@typescript-import-bug/lib/fails"; // fails despite existence of fails/index.ts
