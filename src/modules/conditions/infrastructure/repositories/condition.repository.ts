import { ConditionRepository } from './condition-repository.interface';
import { Condition } from '../../domain/condition.entity';
import { ConditionDocument, ConditionModel } from '../models/condition.model';
import { Model } from 'mongoose';

export class MongoConditionRepository implements ConditionRepository {
  private readonly conditionModel: Model<ConditionDocument>;

  constructor() {
    this.conditionModel = ConditionModel;
  }

  async getMany(): Promise<Condition[]> {
    return this.conditionModel.find().exec();
  }
}