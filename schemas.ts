interface User {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    role: string;
    relations: {
      userId: ObjectId;
      type: string;
      since: Date;
    }[];
    medicalProfile: {
      allergies: {
        allergyId: ObjectId;
        relationshipType: 'self' | 'dependent';
        diagnosedAt: Date;
        severity: string;
        notes?: string;
      }[];
      conditions: {
        conditionId: ObjectId;
        relationshipType: 'self' | 'dependent';
        diagnosedAt: Date;
        status: string;
      }[];
    };
    createdAt: Date;
    updatedAt: Date;
  }