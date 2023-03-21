/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCentre: OnCreateCentreSubscription;
  onUpdateCentre: OnUpdateCentreSubscription;
  onDeleteCentre: OnDeleteCentreSubscription;
  onCreateCoach: OnCreateCoachSubscription;
  onUpdateCoach: OnUpdateCoachSubscription;
  onDeleteCoach: OnDeleteCoachSubscription;
  onCreateStudent: OnCreateStudentSubscription;
  onUpdateStudent: OnUpdateStudentSubscription;
  onDeleteStudent: OnDeleteStudentSubscription;
  onCreateStudentTeacher: OnCreateStudentTeacherSubscription;
  onUpdateStudentTeacher: OnUpdateStudentTeacherSubscription;
  onDeleteStudentTeacher: OnDeleteStudentTeacherSubscription;
};

export type CreateCentreInput = {
  id?: string | null;
  name: string;
};

export type ModelCentreConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCentreConditionInput | null> | null;
  or?: Array<ModelCentreConditionInput | null> | null;
  not?: ModelCentreConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Centre = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: ModelCoachConnection | null;
  student?: ModelStudentConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCoachConnection = {
  __typename: "ModelCoachConnection";
  items: Array<Coach | null>;
  nextToken?: string | null;
};

export type Coach = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: ModelStudentTeacherConnection | null;
  centre?: Centre | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type ModelStudentTeacherConnection = {
  __typename: "ModelStudentTeacherConnection";
  items: Array<StudentTeacher | null>;
  nextToken?: string | null;
};

export type StudentTeacher = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: Coach;
  student: Student;
  createdAt: string;
  updatedAt: string;
};

export type Student = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: ModelStudentTeacherConnection | null;
  centre?: Centre | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection";
  items: Array<Student | null>;
  nextToken?: string | null;
};

export type UpdateCentreInput = {
  id: string;
  name?: string | null;
};

export type DeleteCentreInput = {
  id: string;
};

export type CreateCoachInput = {
  id?: string | null;
  name?: string | null;
  experience?: number | null;
  centreCoachsId?: string | null;
};

export type ModelCoachConditionInput = {
  name?: ModelStringInput | null;
  experience?: ModelIntInput | null;
  and?: Array<ModelCoachConditionInput | null> | null;
  or?: Array<ModelCoachConditionInput | null> | null;
  not?: ModelCoachConditionInput | null;
  centreCoachsId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCoachInput = {
  id: string;
  name?: string | null;
  experience?: number | null;
  centreCoachsId?: string | null;
};

export type DeleteCoachInput = {
  id: string;
};

export type CreateStudentInput = {
  id?: string | null;
  name?: string | null;
  age: number;
  centreStudentId?: string | null;
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelStudentConditionInput | null> | null;
  or?: Array<ModelStudentConditionInput | null> | null;
  not?: ModelStudentConditionInput | null;
  centreStudentId?: ModelIDInput | null;
};

export type UpdateStudentInput = {
  id: string;
  name?: string | null;
  age?: number | null;
  centreStudentId?: string | null;
};

export type DeleteStudentInput = {
  id: string;
};

export type CreateStudentTeacherInput = {
  id?: string | null;
  coachId: string;
  studentId: string;
};

export type ModelStudentTeacherConditionInput = {
  coachId?: ModelIDInput | null;
  studentId?: ModelIDInput | null;
  and?: Array<ModelStudentTeacherConditionInput | null> | null;
  or?: Array<ModelStudentTeacherConditionInput | null> | null;
  not?: ModelStudentTeacherConditionInput | null;
};

export type UpdateStudentTeacherInput = {
  id: string;
  coachId?: string | null;
  studentId?: string | null;
};

export type DeleteStudentTeacherInput = {
  id: string;
};

export type SearchableCentreFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCentreFilterInput | null> | null;
  or?: Array<SearchableCentreFilterInput | null> | null;
  not?: SearchableCentreFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableCentreSortInput = {
  field?: SearchableCentreSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCentreSortableFields {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableCentreAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCentreAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableCentreAggregateField {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableCentreConnection = {
  __typename: "SearchableCentreConnection";
  items: Array<Centre | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type SearchableCoachFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  experience?: SearchableIntFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  centreCoachsId?: SearchableIDFilterInput | null;
  and?: Array<SearchableCoachFilterInput | null> | null;
  or?: Array<SearchableCoachFilterInput | null> | null;
  not?: SearchableCoachFilterInput | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableCoachSortInput = {
  field?: SearchableCoachSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCoachSortableFields {
  id = "id",
  name = "name",
  experience = "experience",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  centreCoachsId = "centreCoachsId"
}

export type SearchableCoachAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCoachAggregateField;
};

export enum SearchableCoachAggregateField {
  id = "id",
  name = "name",
  experience = "experience",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  centreCoachsId = "centreCoachsId"
}

export type SearchableCoachConnection = {
  __typename: "SearchableCoachConnection";
  items: Array<Coach | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableStudentFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  age?: SearchableIntFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  centreStudentId?: SearchableIDFilterInput | null;
  and?: Array<SearchableStudentFilterInput | null> | null;
  or?: Array<SearchableStudentFilterInput | null> | null;
  not?: SearchableStudentFilterInput | null;
};

export type SearchableStudentSortInput = {
  field?: SearchableStudentSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableStudentSortableFields {
  id = "id",
  name = "name",
  age = "age",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  centreStudentId = "centreStudentId"
}

export type SearchableStudentAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableStudentAggregateField;
};

export enum SearchableStudentAggregateField {
  id = "id",
  name = "name",
  age = "age",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  centreStudentId = "centreStudentId"
}

export type SearchableStudentConnection = {
  __typename: "SearchableStudentConnection";
  items: Array<Student | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelCentreFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCentreFilterInput | null> | null;
  or?: Array<ModelCentreFilterInput | null> | null;
  not?: ModelCentreFilterInput | null;
};

export type ModelCentreConnection = {
  __typename: "ModelCentreConnection";
  items: Array<Centre | null>;
  nextToken?: string | null;
};

export type ModelCoachFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  experience?: ModelIntInput | null;
  and?: Array<ModelCoachFilterInput | null> | null;
  or?: Array<ModelCoachFilterInput | null> | null;
  not?: ModelCoachFilterInput | null;
  centreCoachsId?: ModelIDInput | null;
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelStudentFilterInput | null> | null;
  or?: Array<ModelStudentFilterInput | null> | null;
  not?: ModelStudentFilterInput | null;
  centreStudentId?: ModelIDInput | null;
};

export type ModelStudentTeacherFilterInput = {
  id?: ModelIDInput | null;
  coachId?: ModelIDInput | null;
  studentId?: ModelIDInput | null;
  and?: Array<ModelStudentTeacherFilterInput | null> | null;
  or?: Array<ModelStudentTeacherFilterInput | null> | null;
  not?: ModelStudentTeacherFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSubscriptionCentreFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCentreFilterInput | null> | null;
  or?: Array<ModelSubscriptionCentreFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCoachFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  experience?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionCoachFilterInput | null> | null;
  or?: Array<ModelSubscriptionCoachFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  age?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionStudentFilterInput | null> | null;
  or?: Array<ModelSubscriptionStudentFilterInput | null> | null;
};

export type ModelSubscriptionStudentTeacherFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  coachId?: ModelSubscriptionIDInput | null;
  studentId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionStudentTeacherFilterInput | null> | null;
  or?: Array<ModelSubscriptionStudentTeacherFilterInput | null> | null;
};

export type CreateCentreMutation = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCentreMutation = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCentreMutation = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCoachMutation = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type UpdateCoachMutation = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type DeleteCoachMutation = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type CreateStudentMutation = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type UpdateStudentMutation = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type DeleteStudentMutation = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type CreateStudentTeacherMutation = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateStudentTeacherMutation = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteStudentTeacherMutation = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type SearchCentresQuery = {
  __typename: "SearchableCentreConnection";
  items: Array<{
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type SearchCoachesQuery = {
  __typename: "SearchableCoachConnection";
  items: Array<{
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type SearchStudentsQuery = {
  __typename: "SearchableStudentConnection";
  items: Array<{
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetCentreQuery = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCentresQuery = {
  __typename: "ModelCentreConnection";
  items: Array<{
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCoachQuery = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type ListCoachesQuery = {
  __typename: "ModelCoachConnection";
  items: Array<{
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetStudentQuery = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type ListStudentsQuery = {
  __typename: "ModelStudentConnection";
  items: Array<{
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetStudentTeacherQuery = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListStudentTeachersQuery = {
  __typename: "ModelStudentTeacherConnection";
  items: Array<{
    __typename: "StudentTeacher";
    id: string;
    coachId: string;
    studentId: string;
    coach: {
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    };
    student: {
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type StudentTeachersByCoachIdQuery = {
  __typename: "ModelStudentTeacherConnection";
  items: Array<{
    __typename: "StudentTeacher";
    id: string;
    coachId: string;
    studentId: string;
    coach: {
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    };
    student: {
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type StudentTeachersByStudentIdQuery = {
  __typename: "ModelStudentTeacherConnection";
  items: Array<{
    __typename: "StudentTeacher";
    id: string;
    coachId: string;
    studentId: string;
    coach: {
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    };
    student: {
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateCentreSubscription = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCentreSubscription = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCentreSubscription = {
  __typename: "Centre";
  id: string;
  name: string;
  coachs?: {
    __typename: "ModelCoachConnection";
    items: Array<{
      __typename: "Coach";
      id: string;
      name?: string | null;
      experience?: number | null;
      createdAt: string;
      updatedAt: string;
      centreCoachsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  student?: {
    __typename: "ModelStudentConnection";
    items: Array<{
      __typename: "Student";
      id: string;
      name?: string | null;
      age: number;
      createdAt: string;
      updatedAt: string;
      centreStudentId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCoachSubscription = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type OnUpdateCoachSubscription = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type OnDeleteCoachSubscription = {
  __typename: "Coach";
  id: string;
  name?: string | null;
  experience?: number | null;
  student?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreCoachsId?: string | null;
};

export type OnCreateStudentSubscription = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type OnUpdateStudentSubscription = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type OnDeleteStudentSubscription = {
  __typename: "Student";
  id: string;
  name?: string | null;
  age: number;
  coach?: {
    __typename: "ModelStudentTeacherConnection";
    items: Array<{
      __typename: "StudentTeacher";
      id: string;
      coachId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  centre?: {
    __typename: "Centre";
    id: string;
    name: string;
    coachs?: {
      __typename: "ModelCoachConnection";
      nextToken?: string | null;
    } | null;
    student?: {
      __typename: "ModelStudentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  centreStudentId?: string | null;
};

export type OnCreateStudentTeacherSubscription = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStudentTeacherSubscription = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStudentTeacherSubscription = {
  __typename: "StudentTeacher";
  id: string;
  coachId: string;
  studentId: string;
  coach: {
    __typename: "Coach";
    id: string;
    name?: string | null;
    experience?: number | null;
    student?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreCoachsId?: string | null;
  };
  student: {
    __typename: "Student";
    id: string;
    name?: string | null;
    age: number;
    coach?: {
      __typename: "ModelStudentTeacherConnection";
      nextToken?: string | null;
    } | null;
    centre?: {
      __typename: "Centre";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    centreStudentId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCentre(
    input: CreateCentreInput,
    condition?: ModelCentreConditionInput
  ): Promise<CreateCentreMutation> {
    const statement = `mutation CreateCentre($input: CreateCentreInput!, $condition: ModelCentreConditionInput) {
        createCentre(input: $input, condition: $condition) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCentreMutation>response.data.createCentre;
  }
  async UpdateCentre(
    input: UpdateCentreInput,
    condition?: ModelCentreConditionInput
  ): Promise<UpdateCentreMutation> {
    const statement = `mutation UpdateCentre($input: UpdateCentreInput!, $condition: ModelCentreConditionInput) {
        updateCentre(input: $input, condition: $condition) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCentreMutation>response.data.updateCentre;
  }
  async DeleteCentre(
    input: DeleteCentreInput,
    condition?: ModelCentreConditionInput
  ): Promise<DeleteCentreMutation> {
    const statement = `mutation DeleteCentre($input: DeleteCentreInput!, $condition: ModelCentreConditionInput) {
        deleteCentre(input: $input, condition: $condition) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCentreMutation>response.data.deleteCentre;
  }
  async CreateCoach(
    input: CreateCoachInput,
    condition?: ModelCoachConditionInput
  ): Promise<CreateCoachMutation> {
    const statement = `mutation CreateCoach($input: CreateCoachInput!, $condition: ModelCoachConditionInput) {
        createCoach(input: $input, condition: $condition) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCoachMutation>response.data.createCoach;
  }
  async UpdateCoach(
    input: UpdateCoachInput,
    condition?: ModelCoachConditionInput
  ): Promise<UpdateCoachMutation> {
    const statement = `mutation UpdateCoach($input: UpdateCoachInput!, $condition: ModelCoachConditionInput) {
        updateCoach(input: $input, condition: $condition) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCoachMutation>response.data.updateCoach;
  }
  async DeleteCoach(
    input: DeleteCoachInput,
    condition?: ModelCoachConditionInput
  ): Promise<DeleteCoachMutation> {
    const statement = `mutation DeleteCoach($input: DeleteCoachInput!, $condition: ModelCoachConditionInput) {
        deleteCoach(input: $input, condition: $condition) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
              items{
                name
                id
                experience
                centreCoachsId
              }
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCoachMutation>response.data.deleteCoach;
  }
  async CreateStudent(
    input: CreateStudentInput,
    condition?: ModelStudentConditionInput
  ): Promise<CreateStudentMutation> {
    const statement = `mutation CreateStudent($input: CreateStudentInput!, $condition: ModelStudentConditionInput) {
        createStudent(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudentMutation>response.data.createStudent;
  }
  async UpdateStudent(
    input: UpdateStudentInput,
    condition?: ModelStudentConditionInput
  ): Promise<UpdateStudentMutation> {
    const statement = `mutation UpdateStudent($input: UpdateStudentInput!, $condition: ModelStudentConditionInput) {
        updateStudent(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudentMutation>response.data.updateStudent;
  }
  async DeleteStudent(
    input: DeleteStudentInput,
    condition?: ModelStudentConditionInput
  ): Promise<DeleteStudentMutation> {
    const statement = `mutation DeleteStudent($input: DeleteStudentInput!, $condition: ModelStudentConditionInput) {
        deleteStudent(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudentMutation>response.data.deleteStudent;
  }
  async CreateStudentTeacher(
    input: CreateStudentTeacherInput,
    condition?: ModelStudentTeacherConditionInput
  ): Promise<CreateStudentTeacherMutation> {
    const statement = `mutation CreateStudentTeacher($input: CreateStudentTeacherInput!, $condition: ModelStudentTeacherConditionInput) {
        createStudentTeacher(input: $input, condition: $condition) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudentTeacherMutation>response.data.createStudentTeacher;
  }
  async UpdateStudentTeacher(
    input: UpdateStudentTeacherInput,
    condition?: ModelStudentTeacherConditionInput
  ): Promise<UpdateStudentTeacherMutation> {
    const statement = `mutation UpdateStudentTeacher($input: UpdateStudentTeacherInput!, $condition: ModelStudentTeacherConditionInput) {
        updateStudentTeacher(input: $input, condition: $condition) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudentTeacherMutation>response.data.updateStudentTeacher;
  }
  async DeleteStudentTeacher(
    input: DeleteStudentTeacherInput,
    condition?: ModelStudentTeacherConditionInput
  ): Promise<DeleteStudentTeacherMutation> {
    const statement = `mutation DeleteStudentTeacher($input: DeleteStudentTeacherInput!, $condition: ModelStudentTeacherConditionInput) {
        deleteStudentTeacher(input: $input, condition: $condition) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudentTeacherMutation>response.data.deleteStudentTeacher;
  }
  async SearchCentres(
    filter?: SearchableCentreFilterInput,
    sort?: Array<SearchableCentreSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableCentreAggregationInput | null>
  ): Promise<SearchCentresQuery> {
    const statement = `query SearchCentres($filter: SearchableCentreFilterInput, $sort: [SearchableCentreSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableCentreAggregationInput]) {
        searchCentres(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchCentresQuery>response.data.searchCentres;
  }
  async SearchCoaches(
    filter?: SearchableCoachFilterInput,
    sort?: Array<SearchableCoachSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableCoachAggregationInput | null>
  ): Promise<SearchCoachesQuery> {
    const statement = `query SearchCoaches($filter: SearchableCoachFilterInput, $sort: [SearchableCoachSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableCoachAggregationInput]) {
        searchCoaches(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchCoachesQuery>response.data.searchCoaches;
  }
  async SearchStudents(
    filter?: SearchableStudentFilterInput,
    sort?: Array<SearchableStudentSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableStudentAggregationInput | null>
  ): Promise<SearchStudentsQuery> {
    const statement = `query SearchStudents($filter: SearchableStudentFilterInput, $sort: [SearchableStudentSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableStudentAggregationInput]) {
        searchStudents(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchStudentsQuery>response.data.searchStudents;
  }
  async GetCentre(id: string): Promise<GetCentreQuery> {
    const statement = `query GetCentre($id: ID!) {
        getCentre(id: $id) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCentreQuery>response.data.getCentre;
  }
  async ListCentres(
    filter?: ModelCentreFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCentresQuery> {
    const statement = `query ListCentres($filter: ModelCentreFilterInput, $limit: Int, $nextToken: String) {
        listCentres(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
              items{
                name
                id
                experience
                centreCoachsId
              }
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCentresQuery>response.data.listCentres;
  }
  async GetCoach(id: string): Promise<GetCoachQuery> {
    const statement = `query GetCoach($id: ID!) {
        getCoach(id: $id) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCoachQuery>response.data.getCoach;
  }
  async ListCoaches(
    filter?: ModelCoachFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCoachesQuery> {
    const statement = `query ListCoaches($filter: ModelCoachFilterInput, $limit: Int, $nextToken: String) {
        listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCoachesQuery>response.data.listCoaches;
  }
  async GetStudent(id: string): Promise<GetStudentQuery> {
    const statement = `query GetStudent($id: ID!) {
        getStudent(id: $id) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudentQuery>response.data.getStudent;
  }
  async ListStudents(
    filter?: ModelStudentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudentsQuery> {
    const statement = `query ListStudents($filter: ModelStudentFilterInput, $limit: Int, $nextToken: String) {
        listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudentsQuery>response.data.listStudents;
  }
  async GetStudentTeacher(id: string): Promise<GetStudentTeacherQuery> {
    const statement = `query GetStudentTeacher($id: ID!) {
        getStudentTeacher(id: $id) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudentTeacherQuery>response.data.getStudentTeacher;
  }
  async ListStudentTeachers(
    filter?: ModelStudentTeacherFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudentTeachersQuery> {
    const statement = `query ListStudentTeachers($filter: ModelStudentTeacherFilterInput, $limit: Int, $nextToken: String) {
        listStudentTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            coachId
            studentId
            coach {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            student {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudentTeachersQuery>response.data.listStudentTeachers;
  }
  async StudentTeachersByCoachId(
    coachId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudentTeacherFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudentTeachersByCoachIdQuery> {
    const statement = `query StudentTeachersByCoachId($coachId: ID!, $sortDirection: ModelSortDirection, $filter: ModelStudentTeacherFilterInput, $limit: Int, $nextToken: String) {
        studentTeachersByCoachId(
          coachId: $coachId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            coachId
            studentId
            coach {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            student {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      coachId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudentTeachersByCoachIdQuery>(
      response.data.studentTeachersByCoachId
    );
  }
  async StudentTeachersByStudentId(
    studentId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudentTeacherFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudentTeachersByStudentIdQuery> {
    const statement = `query StudentTeachersByStudentId($studentId: ID!, $sortDirection: ModelSortDirection, $filter: ModelStudentTeacherFilterInput, $limit: Int, $nextToken: String) {
        studentTeachersByStudentId(
          studentId: $studentId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            coachId
            studentId
            coach {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            student {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      studentId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudentTeachersByStudentIdQuery>(
      response.data.studentTeachersByStudentId
    );
  }
  OnCreateCentreListener(
    filter?: ModelSubscriptionCentreFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCentre">>
  > {
    const statement = `subscription OnCreateCentre($filter: ModelSubscriptionCentreFilterInput) {
        onCreateCentre(filter: $filter) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCentre">>
    >;
  }

  OnUpdateCentreListener(
    filter?: ModelSubscriptionCentreFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCentre">>
  > {
    const statement = `subscription OnUpdateCentre($filter: ModelSubscriptionCentreFilterInput) {
        onUpdateCentre(filter: $filter) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCentre">>
    >;
  }

  OnDeleteCentreListener(
    filter?: ModelSubscriptionCentreFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCentre">>
  > {
    const statement = `subscription OnDeleteCentre($filter: ModelSubscriptionCentreFilterInput) {
        onDeleteCentre(filter: $filter) {
          __typename
          id
          name
          coachs {
            __typename
            items {
              __typename
              id
              name
              experience
              createdAt
              updatedAt
              centreCoachsId
            }
            nextToken
          }
          student {
            __typename
            items {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              centreStudentId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCentre">>
    >;
  }

  OnCreateCoachListener(
    filter?: ModelSubscriptionCoachFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCoach">>
  > {
    const statement = `subscription OnCreateCoach($filter: ModelSubscriptionCoachFilterInput) {
        onCreateCoach(filter: $filter) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCoach">>
    >;
  }

  OnUpdateCoachListener(
    filter?: ModelSubscriptionCoachFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCoach">>
  > {
    const statement = `subscription OnUpdateCoach($filter: ModelSubscriptionCoachFilterInput) {
        onUpdateCoach(filter: $filter) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCoach">>
    >;
  }

  OnDeleteCoachListener(
    filter?: ModelSubscriptionCoachFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCoach">>
  > {
    const statement = `subscription OnDeleteCoach($filter: ModelSubscriptionCoachFilterInput) {
        onDeleteCoach(filter: $filter) {
          __typename
          id
          name
          experience
          student {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreCoachsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCoach">>
    >;
  }

  OnCreateStudentListener(
    filter?: ModelSubscriptionStudentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStudent">>
  > {
    const statement = `subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
        onCreateStudent(filter: $filter) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStudent">>
    >;
  }

  OnUpdateStudentListener(
    filter?: ModelSubscriptionStudentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStudent">>
  > {
    const statement = `subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
        onUpdateStudent(filter: $filter) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStudent">>
    >;
  }

  OnDeleteStudentListener(
    filter?: ModelSubscriptionStudentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStudent">>
  > {
    const statement = `subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
        onDeleteStudent(filter: $filter) {
          __typename
          id
          name
          age
          coach {
            __typename
            items {
              __typename
              id
              coachId
              studentId
              createdAt
              updatedAt
            }
            nextToken
          }
          centre {
            __typename
            id
            name
            coachs {
              __typename
              nextToken
            }
            student {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          centreStudentId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStudent">>
    >;
  }

  OnCreateStudentTeacherListener(
    filter?: ModelSubscriptionStudentTeacherFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateStudentTeacher">
    >
  > {
    const statement = `subscription OnCreateStudentTeacher($filter: ModelSubscriptionStudentTeacherFilterInput) {
        onCreateStudentTeacher(filter: $filter) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateStudentTeacher">
      >
    >;
  }

  OnUpdateStudentTeacherListener(
    filter?: ModelSubscriptionStudentTeacherFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateStudentTeacher">
    >
  > {
    const statement = `subscription OnUpdateStudentTeacher($filter: ModelSubscriptionStudentTeacherFilterInput) {
        onUpdateStudentTeacher(filter: $filter) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateStudentTeacher">
      >
    >;
  }

  OnDeleteStudentTeacherListener(
    filter?: ModelSubscriptionStudentTeacherFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteStudentTeacher">
    >
  > {
    const statement = `subscription OnDeleteStudentTeacher($filter: ModelSubscriptionStudentTeacherFilterInput) {
        onDeleteStudentTeacher(filter: $filter) {
          __typename
          id
          coachId
          studentId
          coach {
            __typename
            id
            name
            experience
            student {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreCoachsId
          }
          student {
            __typename
            id
            name
            age
            coach {
              __typename
              nextToken
            }
            centre {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            centreStudentId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteStudentTeacher">
      >
    >;
  }
}
