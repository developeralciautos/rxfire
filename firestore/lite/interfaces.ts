import type * as lite from 'firebase/firestore/lite';

export type DocumentReference<T> = lite.DocumentReference<T>;
export type DocumentData = lite.DocumentData;
export type Query<T> = lite.Query<T>;
export type DocumentSnapshot<T> = lite.DocumentSnapshot<T>;
export type QuerySnapshot<T> = lite.QuerySnapshot<T>;
export type QueryDocumentSnapshot<T> = lite.QueryDocumentSnapshot<T>;
export type CountSnapshot = lite.AggregateQuerySnapshot<{
    count: lite.AggregateField<number>;
}>;//, any, DocumentData>;It is considered an error, because it expects only one type parameter, it is passing three parameters.
