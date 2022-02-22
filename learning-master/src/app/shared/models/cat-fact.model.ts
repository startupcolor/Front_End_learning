export interface CatFact {
  createdAt: string;
  deleted: boolean;
  source: string;
  status: CatFactService;
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  user: string;
  '_id': string;
  '__v': number;

}

interface CatFactService {
  verified: boolean;
  sentCount: 1;
}
