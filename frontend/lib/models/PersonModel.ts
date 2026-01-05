export interface PersonsApi {
  _id: string;
  dueAmount: number;
  name: string;
  email: string;
  interestRate: number;
  createdAt: string;
  updatedAt: string;
  details: string;
  totalDeposited: number;
  totalWithdrawn: number;
}

export interface Person {
  id: string;
  dueAmount: number;
  name: string;
  email: string;
  interestRate: number;
  details: string;
  totalDeposited: number;
  totalWithdrawn: number;
  createdAt: string;
  updatedAt: string;
}

export class PersonModel implements Person {
  id: string;
  dueAmount: number;
  name: string;
  email: string;
  interestRate: number;
  details: string;
  totalDeposited: number;
  totalWithdrawn: number;
  createdAt: string;
  updatedAt: string;

  constructor(data: Person) {
    this.id = data.id;
    this.dueAmount = data.dueAmount;
    this.name = data.name;
    this.email = data.email;
    this.interestRate = data.interestRate;
    this.details = data.details;
    this.totalDeposited = data.totalDeposited;
    this.totalWithdrawn = data.totalWithdrawn;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  /** Map single API object to model */
  static fromApi(api: PersonsApi): PersonModel {
    return new PersonModel({
      id: api._id,
      dueAmount: api.dueAmount,
      name: api.name,
      email: api.email,
      interestRate: api.interestRate,
      details: api.details ?? "",
      totalDeposited: api.totalDeposited,
      totalWithdrawn: api.totalWithdrawn,
      createdAt: api.createdAt,
      updatedAt: api.updatedAt,
    });
  }

  /** Map API array to model array */
  static fromApiArray(apiList: PersonsApi[]): PersonModel[] {
    return apiList.map(PersonModel.fromApi);
  }
}
