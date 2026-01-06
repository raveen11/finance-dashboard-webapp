import { TransactionApi, Transaction, TransactionType } from '@/types/transaction';

export class TransactionModel implements Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  personId: string;
  personName: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  purpose: string;
  isMutual: boolean;

  constructor(data: Transaction) {
    this.id = data.id;
    this.type = data.type;
    this.amount = data.amount;
    this.personId = data.personId;
    this.personName = data.personName;
    this.notes = data.notes;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.purpose = data.purpose;
    this.isMutual = data.isMutual;
  }

  /** Map single API object to model */
  static fromApi(api: TransactionApi): TransactionModel {
    return new TransactionModel({
      id: api._id,
      type: api.type,
      amount: api.amount,
      personId: api.person._id,
      personName: api.person.name,
      notes: api.notes ?? '',
      createdAt: api.createdAt,
      updatedAt: api.updatedAt,
      purpose: api.purpose,
      isMutual: api.isMutual,
    });
  }

  /** Map API array to model array */
  static fromApiArray(apiList: TransactionApi[]): TransactionModel[] {
    return apiList.map(TransactionModel.fromApi);
  }

  toPlain(): Transaction {
    return {
      id: this.id,
      type: this.type,
      amount: this.amount,
      personId: this.personId,
      personName: this.personName,
      notes: this.notes,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      purpose: this.purpose,
      isMutual: this.isMutual,
    };
  }

  static toPlainArray(models: TransactionModel[]): Transaction[] {
    return models.map(m => m.toPlain());
  }
}
