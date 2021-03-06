import { v4 as uuidV4 } from "uuid";

class Account {
  id?: string;

  name: string;

  cpf: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { Account };
