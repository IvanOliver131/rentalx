import { v4 as uuidV4 } from "uuid";

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  // Realiza o cadastro do ID
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };
