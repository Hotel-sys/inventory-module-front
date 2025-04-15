import { User } from './user';

export class Company {
  name!: string;
  id!: string;
  address?: string;
  contactInfo?: string;
  phone?: string;
  email?: string;
  industry?: string;

  users!: User[];
}

export class CompanyPayload extends Company {
  override name!: string;
  override address?: string;
  override contactInfo?: string;
  override phone?: string;
  override email?: string;
  override industry?: string;
  userIds!: string[];

  constructor() {
    super();
    this.userIds = [];
  }
  static fromJson(json: any): CompanyPayload {
    const company = new CompanyPayload();
    company.name = json.name;
    company.address = json.address;
    company.contactInfo = json.contactInfo;
    company.phone = json.phone;
    company.email = json.email;
    company.industry = json.industry;
    company.userIds = json.userIds;

    return company;
  }
  static fromJsonList(json: any[]): CompanyPayload[] {
    const companies: CompanyPayload[] = [];
    for (const item of json) {
      companies.push(CompanyPayload.fromJson(item));
    }
    return companies;
  }
  static toJson(company: CompanyPayload): any {
    return {
      name: company.name,
      address: company.address,
      contactInfo: company.contactInfo,
      phone: company.phone,
      email: company.email,
      industry: company.industry,
      userIds: company.userIds,
    };
  }

  static toJsonList(companies: CompanyPayload[]): any[] {
    const json: any[] = [];
    for (const company of companies) {
      json.push(CompanyPayload.toJson(company));
    }
    return json;
  }
}
