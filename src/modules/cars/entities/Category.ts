import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

// Modelagem dos dados
@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  // Realiza o cadastro do ID - Utilizamos se não usarmos um banco
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
