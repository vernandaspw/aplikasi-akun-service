
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model apps
 * 
 */
export type apps = $Result.DefaultSelection<Prisma.$appsPayload>
/**
 * Model filturs
 * 
 */
export type filturs = $Result.DefaultSelection<Prisma.$filtursPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model user_apps
 * 
 */
export type user_apps = $Result.DefaultSelection<Prisma.$user_appsPayload>
/**
 * Model user_filturs
 * 
 */
export type user_filturs = $Result.DefaultSelection<Prisma.$user_filtursPayload>
/**
 * Model user_roles
 * 
 */
export type user_roles = $Result.DefaultSelection<Prisma.$user_rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Apps
 * const apps = await prisma.apps.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Apps
   * const apps = await prisma.apps.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.apps`: Exposes CRUD operations for the **apps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.apps.findMany()
    * ```
    */
  get apps(): Prisma.appsDelegate<ExtArgs>;

  /**
   * `prisma.filturs`: Exposes CRUD operations for the **filturs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filturs
    * const filturs = await prisma.filturs.findMany()
    * ```
    */
  get filturs(): Prisma.filtursDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.user_apps`: Exposes CRUD operations for the **user_apps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_apps
    * const user_apps = await prisma.user_apps.findMany()
    * ```
    */
  get user_apps(): Prisma.user_appsDelegate<ExtArgs>;

  /**
   * `prisma.user_filturs`: Exposes CRUD operations for the **user_filturs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_filturs
    * const user_filturs = await prisma.user_filturs.findMany()
    * ```
    */
  get user_filturs(): Prisma.user_filtursDelegate<ExtArgs>;

  /**
   * `prisma.user_roles`: Exposes CRUD operations for the **user_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_roles.findMany()
    * ```
    */
  get user_roles(): Prisma.user_rolesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    apps: 'apps',
    filturs: 'filturs',
    roles: 'roles',
    user_apps: 'user_apps',
    user_filturs: 'user_filturs',
    user_roles: 'user_roles',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'apps' | 'filturs' | 'roles' | 'user_apps' | 'user_filturs' | 'user_roles' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      apps: {
        payload: Prisma.$appsPayload<ExtArgs>
        fields: Prisma.appsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>
          }
          findFirst: {
            args: Prisma.appsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>
          }
          findMany: {
            args: Prisma.appsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>[]
          }
          create: {
            args: Prisma.appsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>
          }
          createMany: {
            args: Prisma.appsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.appsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>
          }
          update: {
            args: Prisma.appsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>
          }
          deleteMany: {
            args: Prisma.appsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.appsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.appsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$appsPayload>
          }
          aggregate: {
            args: Prisma.AppsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApps>
          }
          groupBy: {
            args: Prisma.appsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppsGroupByOutputType>[]
          }
          count: {
            args: Prisma.appsCountArgs<ExtArgs>,
            result: $Utils.Optional<AppsCountAggregateOutputType> | number
          }
        }
      }
      filturs: {
        payload: Prisma.$filtursPayload<ExtArgs>
        fields: Prisma.filtursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filtursFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filtursFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>
          }
          findFirst: {
            args: Prisma.filtursFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filtursFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>
          }
          findMany: {
            args: Prisma.filtursFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>[]
          }
          create: {
            args: Prisma.filtursCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>
          }
          createMany: {
            args: Prisma.filtursCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.filtursDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>
          }
          update: {
            args: Prisma.filtursUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>
          }
          deleteMany: {
            args: Prisma.filtursDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.filtursUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.filtursUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$filtursPayload>
          }
          aggregate: {
            args: Prisma.FiltursAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFilturs>
          }
          groupBy: {
            args: Prisma.filtursGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FiltursGroupByOutputType>[]
          }
          count: {
            args: Prisma.filtursCountArgs<ExtArgs>,
            result: $Utils.Optional<FiltursCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      user_apps: {
        payload: Prisma.$user_appsPayload<ExtArgs>
        fields: Prisma.user_appsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_appsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_appsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>
          }
          findFirst: {
            args: Prisma.user_appsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_appsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>
          }
          findMany: {
            args: Prisma.user_appsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>[]
          }
          create: {
            args: Prisma.user_appsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>
          }
          createMany: {
            args: Prisma.user_appsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_appsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>
          }
          update: {
            args: Prisma.user_appsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>
          }
          deleteMany: {
            args: Prisma.user_appsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_appsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_appsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_appsPayload>
          }
          aggregate: {
            args: Prisma.User_appsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_apps>
          }
          groupBy: {
            args: Prisma.user_appsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_appsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_appsCountArgs<ExtArgs>,
            result: $Utils.Optional<User_appsCountAggregateOutputType> | number
          }
        }
      }
      user_filturs: {
        payload: Prisma.$user_filtursPayload<ExtArgs>
        fields: Prisma.user_filtursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_filtursFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_filtursFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>
          }
          findFirst: {
            args: Prisma.user_filtursFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_filtursFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>
          }
          findMany: {
            args: Prisma.user_filtursFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>[]
          }
          create: {
            args: Prisma.user_filtursCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>
          }
          createMany: {
            args: Prisma.user_filtursCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_filtursDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>
          }
          update: {
            args: Prisma.user_filtursUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>
          }
          deleteMany: {
            args: Prisma.user_filtursDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_filtursUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_filtursUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_filtursPayload>
          }
          aggregate: {
            args: Prisma.User_filtursAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_filturs>
          }
          groupBy: {
            args: Prisma.user_filtursGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_filtursGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_filtursCountArgs<ExtArgs>,
            result: $Utils.Optional<User_filtursCountAggregateOutputType> | number
          }
        }
      }
      user_roles: {
        payload: Prisma.$user_rolesPayload<ExtArgs>
        fields: Prisma.user_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findFirst: {
            args: Prisma.user_rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findMany: {
            args: Prisma.user_rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          create: {
            args: Prisma.user_rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          createMany: {
            args: Prisma.user_rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          update: {
            args: Prisma.user_rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          deleteMany: {
            args: Prisma.user_rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          aggregate: {
            args: Prisma.User_rolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_roles>
          }
          groupBy: {
            args: Prisma.user_rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<User_rolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AppsCountOutputType
   */

  export type AppsCountOutputType = {
    filturs: number
    roles: number
    other_user_apps: number
  }

  export type AppsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filturs?: boolean | AppsCountOutputTypeCountFiltursArgs
    roles?: boolean | AppsCountOutputTypeCountRolesArgs
    other_user_apps?: boolean | AppsCountOutputTypeCountOther_user_appsArgs
  }

  // Custom InputTypes

  /**
   * AppsCountOutputType without action
   */
  export type AppsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppsCountOutputType
     */
    select?: AppsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AppsCountOutputType without action
   */
  export type AppsCountOutputTypeCountFiltursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filtursWhereInput
  }


  /**
   * AppsCountOutputType without action
   */
  export type AppsCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
  }


  /**
   * AppsCountOutputType without action
   */
  export type AppsCountOutputTypeCountOther_user_appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_appsWhereInput
  }



  /**
   * Count Type FiltursCountOutputType
   */

  export type FiltursCountOutputType = {
    user_filturs: number
  }

  export type FiltursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_filturs?: boolean | FiltursCountOutputTypeCountUser_filtursArgs
  }

  // Custom InputTypes

  /**
   * FiltursCountOutputType without action
   */
  export type FiltursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiltursCountOutputType
     */
    select?: FiltursCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FiltursCountOutputType without action
   */
  export type FiltursCountOutputTypeCountUser_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filtursWhereInput
  }



  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user_roles: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | RolesCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }



  /**
   * Count Type User_appsCountOutputType
   */

  export type User_appsCountOutputType = {
    user_filturs: number
    user_roles: number
  }

  export type User_appsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_filturs?: boolean | User_appsCountOutputTypeCountUser_filtursArgs
    user_roles?: boolean | User_appsCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes

  /**
   * User_appsCountOutputType without action
   */
  export type User_appsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_appsCountOutputType
     */
    select?: User_appsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * User_appsCountOutputType without action
   */
  export type User_appsCountOutputTypeCountUser_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filtursWhereInput
  }


  /**
   * User_appsCountOutputType without action
   */
  export type User_appsCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    apps: number
    filturs: number
    roles: number
    user_apps_user_apps_user_idTousers: number
    user_apps_user_apps_updatedByTousers: number
    user_filturs: number
    user_roles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | UsersCountOutputTypeCountAppsArgs
    filturs?: boolean | UsersCountOutputTypeCountFiltursArgs
    roles?: boolean | UsersCountOutputTypeCountRolesArgs
    user_apps_user_apps_user_idTousers?: boolean | UsersCountOutputTypeCountUser_apps_user_apps_user_idTousersArgs
    user_apps_user_apps_updatedByTousers?: boolean | UsersCountOutputTypeCountUser_apps_user_apps_updatedByTousersArgs
    user_filturs?: boolean | UsersCountOutputTypeCountUser_filtursArgs
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFiltursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filtursWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_apps_user_apps_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_appsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_apps_user_apps_updatedByTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_appsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filtursWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model apps
   */

  export type AggregateApps = {
    _count: AppsCountAggregateOutputType | null
    _avg: AppsAvgAggregateOutputType | null
    _sum: AppsSumAggregateOutputType | null
    _min: AppsMinAggregateOutputType | null
    _max: AppsMaxAggregateOutputType | null
  }

  export type AppsAvgAggregateOutputType = {
    urut: number | null
  }

  export type AppsSumAggregateOutputType = {
    urut: number | null
  }

  export type AppsMinAggregateOutputType = {
    id: string | null
    urut: number | null
    nama: string | null
    img: string | null
    keterangan: string | null
    url: string | null
    isLocal: boolean | null
    isAkun: boolean | null
    isMaintenace: boolean | null
    isActive: boolean | null
    storage_folder: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AppsMaxAggregateOutputType = {
    id: string | null
    urut: number | null
    nama: string | null
    img: string | null
    keterangan: string | null
    url: string | null
    isLocal: boolean | null
    isAkun: boolean | null
    isMaintenace: boolean | null
    isActive: boolean | null
    storage_folder: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AppsCountAggregateOutputType = {
    id: number
    urut: number
    nama: number
    img: number
    keterangan: number
    url: number
    isLocal: number
    isAkun: number
    isMaintenace: number
    isActive: number
    storage_folder: number
    updatedBy: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AppsAvgAggregateInputType = {
    urut?: true
  }

  export type AppsSumAggregateInputType = {
    urut?: true
  }

  export type AppsMinAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    isLocal?: true
    isAkun?: true
    isMaintenace?: true
    isActive?: true
    storage_folder?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AppsMaxAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    isLocal?: true
    isAkun?: true
    isMaintenace?: true
    isActive?: true
    storage_folder?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AppsCountAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    isLocal?: true
    isAkun?: true
    isMaintenace?: true
    isActive?: true
    storage_folder?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AppsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apps to aggregate.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appsOrderByWithRelationInput | appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apps
    **/
    _count?: true | AppsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppsMaxAggregateInputType
  }

  export type GetAppsAggregateType<T extends AppsAggregateArgs> = {
        [P in keyof T & keyof AggregateApps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApps[P]>
      : GetScalarType<T[P], AggregateApps[P]>
  }




  export type appsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appsWhereInput
    orderBy?: appsOrderByWithAggregationInput | appsOrderByWithAggregationInput[]
    by: AppsScalarFieldEnum[] | AppsScalarFieldEnum
    having?: appsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppsCountAggregateInputType | true
    _avg?: AppsAvgAggregateInputType
    _sum?: AppsSumAggregateInputType
    _min?: AppsMinAggregateInputType
    _max?: AppsMaxAggregateInputType
  }

  export type AppsGroupByOutputType = {
    id: string
    urut: number | null
    nama: string
    img: string | null
    keterangan: string | null
    url: string | null
    isLocal: boolean
    isAkun: boolean
    isMaintenace: boolean
    isActive: boolean
    storage_folder: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: AppsCountAggregateOutputType | null
    _avg: AppsAvgAggregateOutputType | null
    _sum: AppsSumAggregateOutputType | null
    _min: AppsMinAggregateOutputType | null
    _max: AppsMaxAggregateOutputType | null
  }

  type GetAppsGroupByPayload<T extends appsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppsGroupByOutputType[P]>
            : GetScalarType<T[P], AppsGroupByOutputType[P]>
        }
      >
    >


  export type appsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urut?: boolean
    nama?: boolean
    img?: boolean
    keterangan?: boolean
    url?: boolean
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    users?: boolean | apps$usersArgs<ExtArgs>
    filturs?: boolean | apps$filtursArgs<ExtArgs>
    roles?: boolean | apps$rolesArgs<ExtArgs>
    other_user_apps?: boolean | apps$other_user_appsArgs<ExtArgs>
    _count?: boolean | AppsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apps"]>

  export type appsSelectScalar = {
    id?: boolean
    urut?: boolean
    nama?: boolean
    img?: boolean
    keterangan?: boolean
    url?: boolean
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type appsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | apps$usersArgs<ExtArgs>
    filturs?: boolean | apps$filtursArgs<ExtArgs>
    roles?: boolean | apps$rolesArgs<ExtArgs>
    other_user_apps?: boolean | apps$other_user_appsArgs<ExtArgs>
    _count?: boolean | AppsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $appsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apps"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      filturs: Prisma.$filtursPayload<ExtArgs>[]
      roles: Prisma.$rolesPayload<ExtArgs>[]
      other_user_apps: Prisma.$user_appsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urut: number | null
      nama: string
      img: string | null
      keterangan: string | null
      url: string | null
      isLocal: boolean
      isAkun: boolean
      isMaintenace: boolean
      isActive: boolean
      storage_folder: string | null
      updatedBy: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["apps"]>
    composites: {}
  }


  type appsGetPayload<S extends boolean | null | undefined | appsDefaultArgs> = $Result.GetResult<Prisma.$appsPayload, S>

  type appsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<appsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppsCountAggregateInputType | true
    }

  export interface appsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apps'], meta: { name: 'apps' } }
    /**
     * Find zero or one Apps that matches the filter.
     * @param {appsFindUniqueArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends appsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appsFindUniqueArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Apps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {appsFindUniqueOrThrowArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends appsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsFindFirstArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends appsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appsFindFirstArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Apps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsFindFirstOrThrowArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends appsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.apps.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.apps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appsWithIdOnly = await prisma.apps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends appsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Apps.
     * @param {appsCreateArgs} args - Arguments to create a Apps.
     * @example
     * // Create one Apps
     * const Apps = await prisma.apps.create({
     *   data: {
     *     // ... data to create a Apps
     *   }
     * })
     * 
    **/
    create<T extends appsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appsCreateArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Apps.
     *     @param {appsCreateManyArgs} args - Arguments to create many Apps.
     *     @example
     *     // Create many Apps
     *     const apps = await prisma.apps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends appsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apps.
     * @param {appsDeleteArgs} args - Arguments to delete one Apps.
     * @example
     * // Delete one Apps
     * const Apps = await prisma.apps.delete({
     *   where: {
     *     // ... filter to delete one Apps
     *   }
     * })
     * 
    **/
    delete<T extends appsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appsDeleteArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Apps.
     * @param {appsUpdateArgs} args - Arguments to update one Apps.
     * @example
     * // Update one Apps
     * const apps = await prisma.apps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends appsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appsUpdateArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Apps.
     * @param {appsDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.apps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends appsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const apps = await prisma.apps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends appsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apps.
     * @param {appsUpsertArgs} args - Arguments to update or create a Apps.
     * @example
     * // Update or create a Apps
     * const apps = await prisma.apps.upsert({
     *   create: {
     *     // ... data to create a Apps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apps we want to update
     *   }
     * })
    **/
    upsert<T extends appsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appsUpsertArgs<ExtArgs>>
    ): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.apps.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends appsCountArgs>(
      args?: Subset<T, appsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppsAggregateArgs>(args: Subset<T, AppsAggregateArgs>): Prisma.PrismaPromise<GetAppsAggregateType<T>>

    /**
     * Group by Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appsGroupByArgs['orderBy'] }
        : { orderBy?: appsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apps model
   */
  readonly fields: appsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends apps$usersArgs<ExtArgs> = {}>(args?: Subset<T, apps$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    filturs<T extends apps$filtursArgs<ExtArgs> = {}>(args?: Subset<T, apps$filtursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findMany'> | Null>;

    roles<T extends apps$rolesArgs<ExtArgs> = {}>(args?: Subset<T, apps$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    other_user_apps<T extends apps$other_user_appsArgs<ExtArgs> = {}>(args?: Subset<T, apps$other_user_appsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the apps model
   */ 
  interface appsFieldRefs {
    readonly id: FieldRef<"apps", 'String'>
    readonly urut: FieldRef<"apps", 'Int'>
    readonly nama: FieldRef<"apps", 'String'>
    readonly img: FieldRef<"apps", 'String'>
    readonly keterangan: FieldRef<"apps", 'String'>
    readonly url: FieldRef<"apps", 'String'>
    readonly isLocal: FieldRef<"apps", 'Boolean'>
    readonly isAkun: FieldRef<"apps", 'Boolean'>
    readonly isMaintenace: FieldRef<"apps", 'Boolean'>
    readonly isActive: FieldRef<"apps", 'Boolean'>
    readonly storage_folder: FieldRef<"apps", 'String'>
    readonly updatedBy: FieldRef<"apps", 'String'>
    readonly created_at: FieldRef<"apps", 'DateTime'>
    readonly updated_at: FieldRef<"apps", 'DateTime'>
    readonly deleted_at: FieldRef<"apps", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * apps findUnique
   */
  export type appsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * Filter, which apps to fetch.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps findUniqueOrThrow
   */
  export type appsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * Filter, which apps to fetch.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps findFirst
   */
  export type appsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appsOrderByWithRelationInput | appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps.
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps.
     */
    distinct?: AppsScalarFieldEnum | AppsScalarFieldEnum[]
  }


  /**
   * apps findFirstOrThrow
   */
  export type appsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appsOrderByWithRelationInput | appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps.
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps.
     */
    distinct?: AppsScalarFieldEnum | AppsScalarFieldEnum[]
  }


  /**
   * apps findMany
   */
  export type appsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appsOrderByWithRelationInput | appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apps.
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    distinct?: AppsScalarFieldEnum | AppsScalarFieldEnum[]
  }


  /**
   * apps create
   */
  export type appsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * The data needed to create a apps.
     */
    data: XOR<appsCreateInput, appsUncheckedCreateInput>
  }


  /**
   * apps createMany
   */
  export type appsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apps.
     */
    data: appsCreateManyInput | appsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * apps update
   */
  export type appsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * The data needed to update a apps.
     */
    data: XOR<appsUpdateInput, appsUncheckedUpdateInput>
    /**
     * Choose, which apps to update.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps updateMany
   */
  export type appsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apps.
     */
    data: XOR<appsUpdateManyMutationInput, appsUncheckedUpdateManyInput>
    /**
     * Filter which apps to update
     */
    where?: appsWhereInput
  }


  /**
   * apps upsert
   */
  export type appsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * The filter to search for the apps to update in case it exists.
     */
    where: appsWhereUniqueInput
    /**
     * In case the apps found by the `where` argument doesn't exist, create a new apps with this data.
     */
    create: XOR<appsCreateInput, appsUncheckedCreateInput>
    /**
     * In case the apps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appsUpdateInput, appsUncheckedUpdateInput>
  }


  /**
   * apps delete
   */
  export type appsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    /**
     * Filter which apps to delete.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps deleteMany
   */
  export type appsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apps to delete
     */
    where?: appsWhereInput
  }


  /**
   * apps.users
   */
  export type apps$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * apps.filturs
   */
  export type apps$filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    where?: filtursWhereInput
    orderBy?: filtursOrderByWithRelationInput | filtursOrderByWithRelationInput[]
    cursor?: filtursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiltursScalarFieldEnum | FiltursScalarFieldEnum[]
  }


  /**
   * apps.roles
   */
  export type apps$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    cursor?: rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * apps.other_user_apps
   */
  export type apps$other_user_appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    where?: user_appsWhereInput
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    cursor?: user_appsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_appsScalarFieldEnum | User_appsScalarFieldEnum[]
  }


  /**
   * apps without action
   */
  export type appsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
  }



  /**
   * Model filturs
   */

  export type AggregateFilturs = {
    _count: FiltursCountAggregateOutputType | null
    _avg: FiltursAvgAggregateOutputType | null
    _sum: FiltursSumAggregateOutputType | null
    _min: FiltursMinAggregateOutputType | null
    _max: FiltursMaxAggregateOutputType | null
  }

  export type FiltursAvgAggregateOutputType = {
    urut: number | null
  }

  export type FiltursSumAggregateOutputType = {
    urut: number | null
  }

  export type FiltursMinAggregateOutputType = {
    id: string | null
    urut: number | null
    nama: string | null
    img: string | null
    keterangan: string | null
    url: string | null
    app_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type FiltursMaxAggregateOutputType = {
    id: string | null
    urut: number | null
    nama: string | null
    img: string | null
    keterangan: string | null
    url: string | null
    app_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type FiltursCountAggregateOutputType = {
    id: number
    urut: number
    nama: number
    img: number
    keterangan: number
    url: number
    app_id: number
    updatedBy: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type FiltursAvgAggregateInputType = {
    urut?: true
  }

  export type FiltursSumAggregateInputType = {
    urut?: true
  }

  export type FiltursMinAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type FiltursMaxAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type FiltursCountAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type FiltursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which filturs to aggregate.
     */
    where?: filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filturs to fetch.
     */
    orderBy?: filtursOrderByWithRelationInput | filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filturs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned filturs
    **/
    _count?: true | FiltursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiltursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiltursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiltursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiltursMaxAggregateInputType
  }

  export type GetFiltursAggregateType<T extends FiltursAggregateArgs> = {
        [P in keyof T & keyof AggregateFilturs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilturs[P]>
      : GetScalarType<T[P], AggregateFilturs[P]>
  }




  export type filtursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filtursWhereInput
    orderBy?: filtursOrderByWithAggregationInput | filtursOrderByWithAggregationInput[]
    by: FiltursScalarFieldEnum[] | FiltursScalarFieldEnum
    having?: filtursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiltursCountAggregateInputType | true
    _avg?: FiltursAvgAggregateInputType
    _sum?: FiltursSumAggregateInputType
    _min?: FiltursMinAggregateInputType
    _max?: FiltursMaxAggregateInputType
  }

  export type FiltursGroupByOutputType = {
    id: string
    urut: number | null
    nama: string
    img: string | null
    keterangan: string | null
    url: string | null
    app_id: string
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: FiltursCountAggregateOutputType | null
    _avg: FiltursAvgAggregateOutputType | null
    _sum: FiltursSumAggregateOutputType | null
    _min: FiltursMinAggregateOutputType | null
    _max: FiltursMaxAggregateOutputType | null
  }

  type GetFiltursGroupByPayload<T extends filtursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiltursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiltursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiltursGroupByOutputType[P]>
            : GetScalarType<T[P], FiltursGroupByOutputType[P]>
        }
      >
    >


  export type filtursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urut?: boolean
    nama?: boolean
    img?: boolean
    keterangan?: boolean
    url?: boolean
    app_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    apps?: boolean | appsDefaultArgs<ExtArgs>
    users?: boolean | filturs$usersArgs<ExtArgs>
    user_filturs?: boolean | filturs$user_filtursArgs<ExtArgs>
    _count?: boolean | FiltursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filturs"]>

  export type filtursSelectScalar = {
    id?: boolean
    urut?: boolean
    nama?: boolean
    img?: boolean
    keterangan?: boolean
    url?: boolean
    app_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type filtursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | appsDefaultArgs<ExtArgs>
    users?: boolean | filturs$usersArgs<ExtArgs>
    user_filturs?: boolean | filturs$user_filtursArgs<ExtArgs>
    _count?: boolean | FiltursCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $filtursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "filturs"
    objects: {
      apps: Prisma.$appsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
      user_filturs: Prisma.$user_filtursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urut: number | null
      nama: string
      img: string | null
      keterangan: string | null
      url: string | null
      app_id: string
      updatedBy: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["filturs"]>
    composites: {}
  }


  type filtursGetPayload<S extends boolean | null | undefined | filtursDefaultArgs> = $Result.GetResult<Prisma.$filtursPayload, S>

  type filtursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<filtursFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FiltursCountAggregateInputType | true
    }

  export interface filtursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['filturs'], meta: { name: 'filturs' } }
    /**
     * Find zero or one Filturs that matches the filter.
     * @param {filtursFindUniqueArgs} args - Arguments to find a Filturs
     * @example
     * // Get one Filturs
     * const filturs = await prisma.filturs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends filtursFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, filtursFindUniqueArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Filturs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {filtursFindUniqueOrThrowArgs} args - Arguments to find a Filturs
     * @example
     * // Get one Filturs
     * const filturs = await prisma.filturs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends filtursFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, filtursFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Filturs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filtursFindFirstArgs} args - Arguments to find a Filturs
     * @example
     * // Get one Filturs
     * const filturs = await prisma.filturs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends filtursFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, filtursFindFirstArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Filturs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filtursFindFirstOrThrowArgs} args - Arguments to find a Filturs
     * @example
     * // Get one Filturs
     * const filturs = await prisma.filturs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends filtursFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, filtursFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Filturs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filtursFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filturs
     * const filturs = await prisma.filturs.findMany()
     * 
     * // Get first 10 Filturs
     * const filturs = await prisma.filturs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filtursWithIdOnly = await prisma.filturs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends filtursFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, filtursFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Filturs.
     * @param {filtursCreateArgs} args - Arguments to create a Filturs.
     * @example
     * // Create one Filturs
     * const Filturs = await prisma.filturs.create({
     *   data: {
     *     // ... data to create a Filturs
     *   }
     * })
     * 
    **/
    create<T extends filtursCreateArgs<ExtArgs>>(
      args: SelectSubset<T, filtursCreateArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Filturs.
     *     @param {filtursCreateManyArgs} args - Arguments to create many Filturs.
     *     @example
     *     // Create many Filturs
     *     const filturs = await prisma.filturs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends filtursCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, filtursCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Filturs.
     * @param {filtursDeleteArgs} args - Arguments to delete one Filturs.
     * @example
     * // Delete one Filturs
     * const Filturs = await prisma.filturs.delete({
     *   where: {
     *     // ... filter to delete one Filturs
     *   }
     * })
     * 
    **/
    delete<T extends filtursDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, filtursDeleteArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Filturs.
     * @param {filtursUpdateArgs} args - Arguments to update one Filturs.
     * @example
     * // Update one Filturs
     * const filturs = await prisma.filturs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends filtursUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, filtursUpdateArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Filturs.
     * @param {filtursDeleteManyArgs} args - Arguments to filter Filturs to delete.
     * @example
     * // Delete a few Filturs
     * const { count } = await prisma.filturs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends filtursDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, filtursDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filtursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filturs
     * const filturs = await prisma.filturs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends filtursUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, filtursUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Filturs.
     * @param {filtursUpsertArgs} args - Arguments to update or create a Filturs.
     * @example
     * // Update or create a Filturs
     * const filturs = await prisma.filturs.upsert({
     *   create: {
     *     // ... data to create a Filturs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filturs we want to update
     *   }
     * })
    **/
    upsert<T extends filtursUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, filtursUpsertArgs<ExtArgs>>
    ): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filtursCountArgs} args - Arguments to filter Filturs to count.
     * @example
     * // Count the number of Filturs
     * const count = await prisma.filturs.count({
     *   where: {
     *     // ... the filter for the Filturs we want to count
     *   }
     * })
    **/
    count<T extends filtursCountArgs>(
      args?: Subset<T, filtursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiltursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiltursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FiltursAggregateArgs>(args: Subset<T, FiltursAggregateArgs>): Prisma.PrismaPromise<GetFiltursAggregateType<T>>

    /**
     * Group by Filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filtursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends filtursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filtursGroupByArgs['orderBy'] }
        : { orderBy?: filtursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, filtursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiltursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the filturs model
   */
  readonly fields: filtursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for filturs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filtursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    apps<T extends appsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, appsDefaultArgs<ExtArgs>>): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends filturs$usersArgs<ExtArgs> = {}>(args?: Subset<T, filturs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user_filturs<T extends filturs$user_filtursArgs<ExtArgs> = {}>(args?: Subset<T, filturs$user_filtursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the filturs model
   */ 
  interface filtursFieldRefs {
    readonly id: FieldRef<"filturs", 'String'>
    readonly urut: FieldRef<"filturs", 'Int'>
    readonly nama: FieldRef<"filturs", 'String'>
    readonly img: FieldRef<"filturs", 'String'>
    readonly keterangan: FieldRef<"filturs", 'String'>
    readonly url: FieldRef<"filturs", 'String'>
    readonly app_id: FieldRef<"filturs", 'String'>
    readonly updatedBy: FieldRef<"filturs", 'String'>
    readonly created_at: FieldRef<"filturs", 'DateTime'>
    readonly updated_at: FieldRef<"filturs", 'DateTime'>
    readonly deleted_at: FieldRef<"filturs", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * filturs findUnique
   */
  export type filtursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * Filter, which filturs to fetch.
     */
    where: filtursWhereUniqueInput
  }


  /**
   * filturs findUniqueOrThrow
   */
  export type filtursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * Filter, which filturs to fetch.
     */
    where: filtursWhereUniqueInput
  }


  /**
   * filturs findFirst
   */
  export type filtursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * Filter, which filturs to fetch.
     */
    where?: filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filturs to fetch.
     */
    orderBy?: filtursOrderByWithRelationInput | filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for filturs.
     */
    cursor?: filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filturs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of filturs.
     */
    distinct?: FiltursScalarFieldEnum | FiltursScalarFieldEnum[]
  }


  /**
   * filturs findFirstOrThrow
   */
  export type filtursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * Filter, which filturs to fetch.
     */
    where?: filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filturs to fetch.
     */
    orderBy?: filtursOrderByWithRelationInput | filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for filturs.
     */
    cursor?: filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filturs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of filturs.
     */
    distinct?: FiltursScalarFieldEnum | FiltursScalarFieldEnum[]
  }


  /**
   * filturs findMany
   */
  export type filtursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * Filter, which filturs to fetch.
     */
    where?: filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of filturs to fetch.
     */
    orderBy?: filtursOrderByWithRelationInput | filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing filturs.
     */
    cursor?: filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` filturs.
     */
    skip?: number
    distinct?: FiltursScalarFieldEnum | FiltursScalarFieldEnum[]
  }


  /**
   * filturs create
   */
  export type filtursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * The data needed to create a filturs.
     */
    data: XOR<filtursCreateInput, filtursUncheckedCreateInput>
  }


  /**
   * filturs createMany
   */
  export type filtursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many filturs.
     */
    data: filtursCreateManyInput | filtursCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * filturs update
   */
  export type filtursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * The data needed to update a filturs.
     */
    data: XOR<filtursUpdateInput, filtursUncheckedUpdateInput>
    /**
     * Choose, which filturs to update.
     */
    where: filtursWhereUniqueInput
  }


  /**
   * filturs updateMany
   */
  export type filtursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update filturs.
     */
    data: XOR<filtursUpdateManyMutationInput, filtursUncheckedUpdateManyInput>
    /**
     * Filter which filturs to update
     */
    where?: filtursWhereInput
  }


  /**
   * filturs upsert
   */
  export type filtursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * The filter to search for the filturs to update in case it exists.
     */
    where: filtursWhereUniqueInput
    /**
     * In case the filturs found by the `where` argument doesn't exist, create a new filturs with this data.
     */
    create: XOR<filtursCreateInput, filtursUncheckedCreateInput>
    /**
     * In case the filturs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filtursUpdateInput, filtursUncheckedUpdateInput>
  }


  /**
   * filturs delete
   */
  export type filtursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    /**
     * Filter which filturs to delete.
     */
    where: filtursWhereUniqueInput
  }


  /**
   * filturs deleteMany
   */
  export type filtursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which filturs to delete
     */
    where?: filtursWhereInput
  }


  /**
   * filturs.users
   */
  export type filturs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * filturs.user_filturs
   */
  export type filturs$user_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    where?: user_filtursWhereInput
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    cursor?: user_filtursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_filtursScalarFieldEnum | User_filtursScalarFieldEnum[]
  }


  /**
   * filturs without action
   */
  export type filtursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
  }



  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    urut: number | null
  }

  export type RolesSumAggregateOutputType = {
    urut: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    urut: number | null
    nama: string | null
    img: string | null
    keterangan: string | null
    url: string | null
    app_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    urut: number | null
    nama: string | null
    img: string | null
    keterangan: string | null
    url: string | null
    app_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    urut: number
    nama: number
    img: number
    keterangan: number
    url: number
    app_id: number
    updatedBy: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    urut?: true
  }

  export type RolesSumAggregateInputType = {
    urut?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    urut?: true
    nama?: true
    img?: true
    keterangan?: true
    url?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    urut: number | null
    nama: string
    img: string | null
    keterangan: string | null
    url: string | null
    app_id: string
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urut?: boolean
    nama?: boolean
    img?: boolean
    keterangan?: boolean
    url?: boolean
    app_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    apps?: boolean | appsDefaultArgs<ExtArgs>
    users?: boolean | roles$usersArgs<ExtArgs>
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    urut?: boolean
    nama?: boolean
    img?: boolean
    keterangan?: boolean
    url?: boolean
    app_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | appsDefaultArgs<ExtArgs>
    users?: boolean | roles$usersArgs<ExtArgs>
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      apps: Prisma.$appsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urut: number | null
      nama: string
      img: string | null
      keterangan: string | null
      url: string | null
      app_id: string
      updatedBy: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesCreateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    apps<T extends appsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, appsDefaultArgs<ExtArgs>>): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user_roles<T extends roles$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, roles$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly urut: FieldRef<"roles", 'Int'>
    readonly nama: FieldRef<"roles", 'String'>
    readonly img: FieldRef<"roles", 'String'>
    readonly keterangan: FieldRef<"roles", 'String'>
    readonly url: FieldRef<"roles", 'String'>
    readonly app_id: FieldRef<"roles", 'String'>
    readonly updatedBy: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
    readonly deleted_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }


  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }


  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }


  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }


  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * roles.user_roles
   */
  export type roles$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }


  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
  }



  /**
   * Model user_apps
   */

  export type AggregateUser_apps = {
    _count: User_appsCountAggregateOutputType | null
    _min: User_appsMinAggregateOutputType | null
    _max: User_appsMaxAggregateOutputType | null
  }

  export type User_appsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    app_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_appsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    app_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_appsCountAggregateOutputType = {
    id: number
    user_id: number
    app_id: number
    updatedBy: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_appsMinAggregateInputType = {
    id?: true
    user_id?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
  }

  export type User_appsMaxAggregateInputType = {
    id?: true
    user_id?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
  }

  export type User_appsCountAggregateInputType = {
    id?: true
    user_id?: true
    app_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_appsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_apps to aggregate.
     */
    where?: user_appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_apps
    **/
    _count?: true | User_appsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_appsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_appsMaxAggregateInputType
  }

  export type GetUser_appsAggregateType<T extends User_appsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_apps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_apps[P]>
      : GetScalarType<T[P], AggregateUser_apps[P]>
  }




  export type user_appsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_appsWhereInput
    orderBy?: user_appsOrderByWithAggregationInput | user_appsOrderByWithAggregationInput[]
    by: User_appsScalarFieldEnum[] | User_appsScalarFieldEnum
    having?: user_appsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_appsCountAggregateInputType | true
    _min?: User_appsMinAggregateInputType
    _max?: User_appsMaxAggregateInputType
  }

  export type User_appsGroupByOutputType = {
    id: string
    user_id: string
    app_id: string
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: User_appsCountAggregateOutputType | null
    _min: User_appsMinAggregateOutputType | null
    _max: User_appsMaxAggregateOutputType | null
  }

  type GetUser_appsGroupByPayload<T extends user_appsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_appsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_appsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_appsGroupByOutputType[P]>
            : GetScalarType<T[P], User_appsGroupByOutputType[P]>
        }
      >
    >


  export type user_appsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    app_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_user_apps_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    apps?: boolean | appsDefaultArgs<ExtArgs>
    users_user_apps_updatedByTousers?: boolean | user_apps$users_user_apps_updatedByTousersArgs<ExtArgs>
    user_filturs?: boolean | user_apps$user_filtursArgs<ExtArgs>
    user_roles?: boolean | user_apps$user_rolesArgs<ExtArgs>
    _count?: boolean | User_appsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_apps"]>

  export type user_appsSelectScalar = {
    id?: boolean
    user_id?: boolean
    app_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_appsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_user_apps_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    apps?: boolean | appsDefaultArgs<ExtArgs>
    users_user_apps_updatedByTousers?: boolean | user_apps$users_user_apps_updatedByTousersArgs<ExtArgs>
    user_filturs?: boolean | user_apps$user_filtursArgs<ExtArgs>
    user_roles?: boolean | user_apps$user_rolesArgs<ExtArgs>
    _count?: boolean | User_appsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $user_appsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_apps"
    objects: {
      users_user_apps_user_idTousers: Prisma.$usersPayload<ExtArgs>
      apps: Prisma.$appsPayload<ExtArgs>
      users_user_apps_updatedByTousers: Prisma.$usersPayload<ExtArgs> | null
      user_filturs: Prisma.$user_filtursPayload<ExtArgs>[]
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      app_id: string
      updatedBy: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_apps"]>
    composites: {}
  }


  type user_appsGetPayload<S extends boolean | null | undefined | user_appsDefaultArgs> = $Result.GetResult<Prisma.$user_appsPayload, S>

  type user_appsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_appsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_appsCountAggregateInputType | true
    }

  export interface user_appsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_apps'], meta: { name: 'user_apps' } }
    /**
     * Find zero or one User_apps that matches the filter.
     * @param {user_appsFindUniqueArgs} args - Arguments to find a User_apps
     * @example
     * // Get one User_apps
     * const user_apps = await prisma.user_apps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_appsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_appsFindUniqueArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_apps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_appsFindUniqueOrThrowArgs} args - Arguments to find a User_apps
     * @example
     * // Get one User_apps
     * const user_apps = await prisma.user_apps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_appsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_appsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appsFindFirstArgs} args - Arguments to find a User_apps
     * @example
     * // Get one User_apps
     * const user_apps = await prisma.user_apps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_appsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_appsFindFirstArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_apps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appsFindFirstOrThrowArgs} args - Arguments to find a User_apps
     * @example
     * // Get one User_apps
     * const user_apps = await prisma.user_apps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_appsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_appsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_apps
     * const user_apps = await prisma.user_apps.findMany()
     * 
     * // Get first 10 User_apps
     * const user_apps = await prisma.user_apps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_appsWithIdOnly = await prisma.user_apps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_appsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_appsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_apps.
     * @param {user_appsCreateArgs} args - Arguments to create a User_apps.
     * @example
     * // Create one User_apps
     * const User_apps = await prisma.user_apps.create({
     *   data: {
     *     // ... data to create a User_apps
     *   }
     * })
     * 
    **/
    create<T extends user_appsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_appsCreateArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_apps.
     *     @param {user_appsCreateManyArgs} args - Arguments to create many User_apps.
     *     @example
     *     // Create many User_apps
     *     const user_apps = await prisma.user_apps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_appsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_appsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_apps.
     * @param {user_appsDeleteArgs} args - Arguments to delete one User_apps.
     * @example
     * // Delete one User_apps
     * const User_apps = await prisma.user_apps.delete({
     *   where: {
     *     // ... filter to delete one User_apps
     *   }
     * })
     * 
    **/
    delete<T extends user_appsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_appsDeleteArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_apps.
     * @param {user_appsUpdateArgs} args - Arguments to update one User_apps.
     * @example
     * // Update one User_apps
     * const user_apps = await prisma.user_apps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_appsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_appsUpdateArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_apps.
     * @param {user_appsDeleteManyArgs} args - Arguments to filter User_apps to delete.
     * @example
     * // Delete a few User_apps
     * const { count } = await prisma.user_apps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_appsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_appsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_apps
     * const user_apps = await prisma.user_apps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_appsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_appsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_apps.
     * @param {user_appsUpsertArgs} args - Arguments to update or create a User_apps.
     * @example
     * // Update or create a User_apps
     * const user_apps = await prisma.user_apps.upsert({
     *   create: {
     *     // ... data to create a User_apps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_apps we want to update
     *   }
     * })
    **/
    upsert<T extends user_appsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_appsUpsertArgs<ExtArgs>>
    ): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appsCountArgs} args - Arguments to filter User_apps to count.
     * @example
     * // Count the number of User_apps
     * const count = await prisma.user_apps.count({
     *   where: {
     *     // ... the filter for the User_apps we want to count
     *   }
     * })
    **/
    count<T extends user_appsCountArgs>(
      args?: Subset<T, user_appsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_appsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_appsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_appsAggregateArgs>(args: Subset<T, User_appsAggregateArgs>): Prisma.PrismaPromise<GetUser_appsAggregateType<T>>

    /**
     * Group by User_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_appsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_appsGroupByArgs['orderBy'] }
        : { orderBy?: user_appsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_appsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_appsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_apps model
   */
  readonly fields: user_appsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_apps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_appsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users_user_apps_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    apps<T extends appsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, appsDefaultArgs<ExtArgs>>): Prisma__appsClient<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users_user_apps_updatedByTousers<T extends user_apps$users_user_apps_updatedByTousersArgs<ExtArgs> = {}>(args?: Subset<T, user_apps$users_user_apps_updatedByTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user_filturs<T extends user_apps$user_filtursArgs<ExtArgs> = {}>(args?: Subset<T, user_apps$user_filtursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_roles<T extends user_apps$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, user_apps$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_apps model
   */ 
  interface user_appsFieldRefs {
    readonly id: FieldRef<"user_apps", 'String'>
    readonly user_id: FieldRef<"user_apps", 'String'>
    readonly app_id: FieldRef<"user_apps", 'String'>
    readonly updatedBy: FieldRef<"user_apps", 'String'>
    readonly created_at: FieldRef<"user_apps", 'DateTime'>
    readonly updated_at: FieldRef<"user_apps", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * user_apps findUnique
   */
  export type user_appsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * Filter, which user_apps to fetch.
     */
    where: user_appsWhereUniqueInput
  }


  /**
   * user_apps findUniqueOrThrow
   */
  export type user_appsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * Filter, which user_apps to fetch.
     */
    where: user_appsWhereUniqueInput
  }


  /**
   * user_apps findFirst
   */
  export type user_appsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * Filter, which user_apps to fetch.
     */
    where?: user_appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_apps.
     */
    cursor?: user_appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_apps.
     */
    distinct?: User_appsScalarFieldEnum | User_appsScalarFieldEnum[]
  }


  /**
   * user_apps findFirstOrThrow
   */
  export type user_appsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * Filter, which user_apps to fetch.
     */
    where?: user_appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_apps.
     */
    cursor?: user_appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_apps.
     */
    distinct?: User_appsScalarFieldEnum | User_appsScalarFieldEnum[]
  }


  /**
   * user_apps findMany
   */
  export type user_appsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * Filter, which user_apps to fetch.
     */
    where?: user_appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_apps.
     */
    cursor?: user_appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    distinct?: User_appsScalarFieldEnum | User_appsScalarFieldEnum[]
  }


  /**
   * user_apps create
   */
  export type user_appsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_apps.
     */
    data: XOR<user_appsCreateInput, user_appsUncheckedCreateInput>
  }


  /**
   * user_apps createMany
   */
  export type user_appsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_apps.
     */
    data: user_appsCreateManyInput | user_appsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_apps update
   */
  export type user_appsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_apps.
     */
    data: XOR<user_appsUpdateInput, user_appsUncheckedUpdateInput>
    /**
     * Choose, which user_apps to update.
     */
    where: user_appsWhereUniqueInput
  }


  /**
   * user_apps updateMany
   */
  export type user_appsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_apps.
     */
    data: XOR<user_appsUpdateManyMutationInput, user_appsUncheckedUpdateManyInput>
    /**
     * Filter which user_apps to update
     */
    where?: user_appsWhereInput
  }


  /**
   * user_apps upsert
   */
  export type user_appsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_apps to update in case it exists.
     */
    where: user_appsWhereUniqueInput
    /**
     * In case the user_apps found by the `where` argument doesn't exist, create a new user_apps with this data.
     */
    create: XOR<user_appsCreateInput, user_appsUncheckedCreateInput>
    /**
     * In case the user_apps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_appsUpdateInput, user_appsUncheckedUpdateInput>
  }


  /**
   * user_apps delete
   */
  export type user_appsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    /**
     * Filter which user_apps to delete.
     */
    where: user_appsWhereUniqueInput
  }


  /**
   * user_apps deleteMany
   */
  export type user_appsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_apps to delete
     */
    where?: user_appsWhereInput
  }


  /**
   * user_apps.users_user_apps_updatedByTousers
   */
  export type user_apps$users_user_apps_updatedByTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * user_apps.user_filturs
   */
  export type user_apps$user_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    where?: user_filtursWhereInput
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    cursor?: user_filtursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_filtursScalarFieldEnum | User_filtursScalarFieldEnum[]
  }


  /**
   * user_apps.user_roles
   */
  export type user_apps$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }


  /**
   * user_apps without action
   */
  export type user_appsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
  }



  /**
   * Model user_filturs
   */

  export type AggregateUser_filturs = {
    _count: User_filtursCountAggregateOutputType | null
    _avg: User_filtursAvgAggregateOutputType | null
    _sum: User_filtursSumAggregateOutputType | null
    _min: User_filtursMinAggregateOutputType | null
    _max: User_filtursMaxAggregateOutputType | null
  }

  export type User_filtursAvgAggregateOutputType = {
    urut: number | null
  }

  export type User_filtursSumAggregateOutputType = {
    urut: number | null
  }

  export type User_filtursMinAggregateOutputType = {
    id: string | null
    urut: number | null
    user_app_id: string | null
    filtur_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_filtursMaxAggregateOutputType = {
    id: string | null
    urut: number | null
    user_app_id: string | null
    filtur_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_filtursCountAggregateOutputType = {
    id: number
    urut: number
    user_app_id: number
    filtur_id: number
    updatedBy: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_filtursAvgAggregateInputType = {
    urut?: true
  }

  export type User_filtursSumAggregateInputType = {
    urut?: true
  }

  export type User_filtursMinAggregateInputType = {
    id?: true
    urut?: true
    user_app_id?: true
    filtur_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
  }

  export type User_filtursMaxAggregateInputType = {
    id?: true
    urut?: true
    user_app_id?: true
    filtur_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
  }

  export type User_filtursCountAggregateInputType = {
    id?: true
    urut?: true
    user_app_id?: true
    filtur_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_filtursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_filturs to aggregate.
     */
    where?: user_filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_filturs to fetch.
     */
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_filturs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_filturs
    **/
    _count?: true | User_filtursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_filtursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_filtursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_filtursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_filtursMaxAggregateInputType
  }

  export type GetUser_filtursAggregateType<T extends User_filtursAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_filturs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_filturs[P]>
      : GetScalarType<T[P], AggregateUser_filturs[P]>
  }




  export type user_filtursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filtursWhereInput
    orderBy?: user_filtursOrderByWithAggregationInput | user_filtursOrderByWithAggregationInput[]
    by: User_filtursScalarFieldEnum[] | User_filtursScalarFieldEnum
    having?: user_filtursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_filtursCountAggregateInputType | true
    _avg?: User_filtursAvgAggregateInputType
    _sum?: User_filtursSumAggregateInputType
    _min?: User_filtursMinAggregateInputType
    _max?: User_filtursMaxAggregateInputType
  }

  export type User_filtursGroupByOutputType = {
    id: string
    urut: number | null
    user_app_id: string
    filtur_id: string
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: User_filtursCountAggregateOutputType | null
    _avg: User_filtursAvgAggregateOutputType | null
    _sum: User_filtursSumAggregateOutputType | null
    _min: User_filtursMinAggregateOutputType | null
    _max: User_filtursMaxAggregateOutputType | null
  }

  type GetUser_filtursGroupByPayload<T extends user_filtursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_filtursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_filtursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_filtursGroupByOutputType[P]>
            : GetScalarType<T[P], User_filtursGroupByOutputType[P]>
        }
      >
    >


  export type user_filtursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urut?: boolean
    user_app_id?: boolean
    filtur_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    filturs?: boolean | filtursDefaultArgs<ExtArgs>
    users?: boolean | user_filturs$usersArgs<ExtArgs>
    user_apps?: boolean | user_appsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_filturs"]>

  export type user_filtursSelectScalar = {
    id?: boolean
    urut?: boolean
    user_app_id?: boolean
    filtur_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_filtursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filturs?: boolean | filtursDefaultArgs<ExtArgs>
    users?: boolean | user_filturs$usersArgs<ExtArgs>
    user_apps?: boolean | user_appsDefaultArgs<ExtArgs>
  }


  export type $user_filtursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_filturs"
    objects: {
      filturs: Prisma.$filtursPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
      user_apps: Prisma.$user_appsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urut: number | null
      user_app_id: string
      filtur_id: string
      updatedBy: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_filturs"]>
    composites: {}
  }


  type user_filtursGetPayload<S extends boolean | null | undefined | user_filtursDefaultArgs> = $Result.GetResult<Prisma.$user_filtursPayload, S>

  type user_filtursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_filtursFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_filtursCountAggregateInputType | true
    }

  export interface user_filtursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_filturs'], meta: { name: 'user_filturs' } }
    /**
     * Find zero or one User_filturs that matches the filter.
     * @param {user_filtursFindUniqueArgs} args - Arguments to find a User_filturs
     * @example
     * // Get one User_filturs
     * const user_filturs = await prisma.user_filturs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_filtursFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_filtursFindUniqueArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_filturs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_filtursFindUniqueOrThrowArgs} args - Arguments to find a User_filturs
     * @example
     * // Get one User_filturs
     * const user_filturs = await prisma.user_filturs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_filtursFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_filtursFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_filturs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filtursFindFirstArgs} args - Arguments to find a User_filturs
     * @example
     * // Get one User_filturs
     * const user_filturs = await prisma.user_filturs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_filtursFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_filtursFindFirstArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_filturs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filtursFindFirstOrThrowArgs} args - Arguments to find a User_filturs
     * @example
     * // Get one User_filturs
     * const user_filturs = await prisma.user_filturs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_filtursFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_filtursFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_filturs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filtursFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_filturs
     * const user_filturs = await prisma.user_filturs.findMany()
     * 
     * // Get first 10 User_filturs
     * const user_filturs = await prisma.user_filturs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_filtursWithIdOnly = await prisma.user_filturs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_filtursFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_filtursFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_filturs.
     * @param {user_filtursCreateArgs} args - Arguments to create a User_filturs.
     * @example
     * // Create one User_filturs
     * const User_filturs = await prisma.user_filturs.create({
     *   data: {
     *     // ... data to create a User_filturs
     *   }
     * })
     * 
    **/
    create<T extends user_filtursCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_filtursCreateArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_filturs.
     *     @param {user_filtursCreateManyArgs} args - Arguments to create many User_filturs.
     *     @example
     *     // Create many User_filturs
     *     const user_filturs = await prisma.user_filturs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_filtursCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_filtursCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_filturs.
     * @param {user_filtursDeleteArgs} args - Arguments to delete one User_filturs.
     * @example
     * // Delete one User_filturs
     * const User_filturs = await prisma.user_filturs.delete({
     *   where: {
     *     // ... filter to delete one User_filturs
     *   }
     * })
     * 
    **/
    delete<T extends user_filtursDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_filtursDeleteArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_filturs.
     * @param {user_filtursUpdateArgs} args - Arguments to update one User_filturs.
     * @example
     * // Update one User_filturs
     * const user_filturs = await prisma.user_filturs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_filtursUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_filtursUpdateArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_filturs.
     * @param {user_filtursDeleteManyArgs} args - Arguments to filter User_filturs to delete.
     * @example
     * // Delete a few User_filturs
     * const { count } = await prisma.user_filturs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_filtursDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_filtursDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filtursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_filturs
     * const user_filturs = await prisma.user_filturs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_filtursUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_filtursUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_filturs.
     * @param {user_filtursUpsertArgs} args - Arguments to update or create a User_filturs.
     * @example
     * // Update or create a User_filturs
     * const user_filturs = await prisma.user_filturs.upsert({
     *   create: {
     *     // ... data to create a User_filturs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_filturs we want to update
     *   }
     * })
    **/
    upsert<T extends user_filtursUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_filtursUpsertArgs<ExtArgs>>
    ): Prisma__user_filtursClient<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filtursCountArgs} args - Arguments to filter User_filturs to count.
     * @example
     * // Count the number of User_filturs
     * const count = await prisma.user_filturs.count({
     *   where: {
     *     // ... the filter for the User_filturs we want to count
     *   }
     * })
    **/
    count<T extends user_filtursCountArgs>(
      args?: Subset<T, user_filtursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_filtursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_filtursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_filtursAggregateArgs>(args: Subset<T, User_filtursAggregateArgs>): Prisma.PrismaPromise<GetUser_filtursAggregateType<T>>

    /**
     * Group by User_filturs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filtursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_filtursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_filtursGroupByArgs['orderBy'] }
        : { orderBy?: user_filtursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_filtursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_filtursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_filturs model
   */
  readonly fields: user_filtursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_filturs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_filtursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    filturs<T extends filtursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filtursDefaultArgs<ExtArgs>>): Prisma__filtursClient<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends user_filturs$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_filturs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user_apps<T extends user_appsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_appsDefaultArgs<ExtArgs>>): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_filturs model
   */ 
  interface user_filtursFieldRefs {
    readonly id: FieldRef<"user_filturs", 'String'>
    readonly urut: FieldRef<"user_filturs", 'Int'>
    readonly user_app_id: FieldRef<"user_filturs", 'String'>
    readonly filtur_id: FieldRef<"user_filturs", 'String'>
    readonly updatedBy: FieldRef<"user_filturs", 'String'>
    readonly created_at: FieldRef<"user_filturs", 'DateTime'>
    readonly updated_at: FieldRef<"user_filturs", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * user_filturs findUnique
   */
  export type user_filtursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * Filter, which user_filturs to fetch.
     */
    where: user_filtursWhereUniqueInput
  }


  /**
   * user_filturs findUniqueOrThrow
   */
  export type user_filtursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * Filter, which user_filturs to fetch.
     */
    where: user_filtursWhereUniqueInput
  }


  /**
   * user_filturs findFirst
   */
  export type user_filtursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * Filter, which user_filturs to fetch.
     */
    where?: user_filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_filturs to fetch.
     */
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_filturs.
     */
    cursor?: user_filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_filturs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_filturs.
     */
    distinct?: User_filtursScalarFieldEnum | User_filtursScalarFieldEnum[]
  }


  /**
   * user_filturs findFirstOrThrow
   */
  export type user_filtursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * Filter, which user_filturs to fetch.
     */
    where?: user_filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_filturs to fetch.
     */
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_filturs.
     */
    cursor?: user_filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_filturs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_filturs.
     */
    distinct?: User_filtursScalarFieldEnum | User_filtursScalarFieldEnum[]
  }


  /**
   * user_filturs findMany
   */
  export type user_filtursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * Filter, which user_filturs to fetch.
     */
    where?: user_filtursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_filturs to fetch.
     */
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_filturs.
     */
    cursor?: user_filtursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_filturs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_filturs.
     */
    skip?: number
    distinct?: User_filtursScalarFieldEnum | User_filtursScalarFieldEnum[]
  }


  /**
   * user_filturs create
   */
  export type user_filtursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * The data needed to create a user_filturs.
     */
    data: XOR<user_filtursCreateInput, user_filtursUncheckedCreateInput>
  }


  /**
   * user_filturs createMany
   */
  export type user_filtursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_filturs.
     */
    data: user_filtursCreateManyInput | user_filtursCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_filturs update
   */
  export type user_filtursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * The data needed to update a user_filturs.
     */
    data: XOR<user_filtursUpdateInput, user_filtursUncheckedUpdateInput>
    /**
     * Choose, which user_filturs to update.
     */
    where: user_filtursWhereUniqueInput
  }


  /**
   * user_filturs updateMany
   */
  export type user_filtursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_filturs.
     */
    data: XOR<user_filtursUpdateManyMutationInput, user_filtursUncheckedUpdateManyInput>
    /**
     * Filter which user_filturs to update
     */
    where?: user_filtursWhereInput
  }


  /**
   * user_filturs upsert
   */
  export type user_filtursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * The filter to search for the user_filturs to update in case it exists.
     */
    where: user_filtursWhereUniqueInput
    /**
     * In case the user_filturs found by the `where` argument doesn't exist, create a new user_filturs with this data.
     */
    create: XOR<user_filtursCreateInput, user_filtursUncheckedCreateInput>
    /**
     * In case the user_filturs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_filtursUpdateInput, user_filtursUncheckedUpdateInput>
  }


  /**
   * user_filturs delete
   */
  export type user_filtursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    /**
     * Filter which user_filturs to delete.
     */
    where: user_filtursWhereUniqueInput
  }


  /**
   * user_filturs deleteMany
   */
  export type user_filtursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_filturs to delete
     */
    where?: user_filtursWhereInput
  }


  /**
   * user_filturs.users
   */
  export type user_filturs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * user_filturs without action
   */
  export type user_filtursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
  }



  /**
   * Model user_roles
   */

  export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null
    _avg: User_rolesAvgAggregateOutputType | null
    _sum: User_rolesSumAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  export type User_rolesAvgAggregateOutputType = {
    urut: number | null
  }

  export type User_rolesSumAggregateOutputType = {
    urut: number | null
  }

  export type User_rolesMinAggregateOutputType = {
    id: string | null
    urut: number | null
    user_app_id: string | null
    role_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_rolesMaxAggregateOutputType = {
    id: string | null
    urut: number | null
    user_app_id: string | null
    role_id: string | null
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_rolesCountAggregateOutputType = {
    id: number
    urut: number
    user_app_id: number
    role_id: number
    updatedBy: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_rolesAvgAggregateInputType = {
    urut?: true
  }

  export type User_rolesSumAggregateInputType = {
    urut?: true
  }

  export type User_rolesMinAggregateInputType = {
    id?: true
    urut?: true
    user_app_id?: true
    role_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
  }

  export type User_rolesMaxAggregateInputType = {
    id?: true
    urut?: true
    user_app_id?: true
    role_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
  }

  export type User_rolesCountAggregateInputType = {
    id?: true
    urut?: true
    user_app_id?: true
    role_id?: true
    updatedBy?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to aggregate.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_rolesMaxAggregateInputType
  }

  export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles[P]>
      : GetScalarType<T[P], AggregateUser_roles[P]>
  }




  export type user_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithAggregationInput | user_rolesOrderByWithAggregationInput[]
    by: User_rolesScalarFieldEnum[] | User_rolesScalarFieldEnum
    having?: user_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_rolesCountAggregateInputType | true
    _avg?: User_rolesAvgAggregateInputType
    _sum?: User_rolesSumAggregateInputType
    _min?: User_rolesMinAggregateInputType
    _max?: User_rolesMaxAggregateInputType
  }

  export type User_rolesGroupByOutputType = {
    id: string
    urut: number | null
    user_app_id: string
    role_id: string
    updatedBy: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: User_rolesCountAggregateOutputType | null
    _avg: User_rolesAvgAggregateOutputType | null
    _sum: User_rolesSumAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  type GetUser_rolesGroupByPayload<T extends user_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
        }
      >
    >


  export type user_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urut?: boolean
    user_app_id?: boolean
    role_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users?: boolean | user_roles$usersArgs<ExtArgs>
    user_apps?: boolean | user_appsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectScalar = {
    id?: boolean
    urut?: boolean
    user_app_id?: boolean
    role_id?: boolean
    updatedBy?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users?: boolean | user_roles$usersArgs<ExtArgs>
    user_apps?: boolean | user_appsDefaultArgs<ExtArgs>
  }


  export type $user_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_roles"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
      user_apps: Prisma.$user_appsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urut: number | null
      user_app_id: string
      role_id: string
      updatedBy: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_roles"]>
    composites: {}
  }


  type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesDefaultArgs> = $Result.GetResult<Prisma.$user_rolesPayload, S>

  type user_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_rolesCountAggregateInputType | true
    }

  export interface user_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_roles'], meta: { name: 'user_roles' } }
    /**
     * Find zero or one User_roles that matches the filter.
     * @param {user_rolesFindUniqueArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindFirstArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_roles.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_rolesWithIdOnly = await prisma.user_roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_roles.
     * @param {user_rolesCreateArgs} args - Arguments to create a User_roles.
     * @example
     * // Create one User_roles
     * const User_roles = await prisma.user_roles.create({
     *   data: {
     *     // ... data to create a User_roles
     *   }
     * })
     * 
    **/
    create<T extends user_rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesCreateArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_roles.
     *     @param {user_rolesCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_roles = await prisma.user_roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_roles.
     * @param {user_rolesDeleteArgs} args - Arguments to delete one User_roles.
     * @example
     * // Delete one User_roles
     * const User_roles = await prisma.user_roles.delete({
     *   where: {
     *     // ... filter to delete one User_roles
     *   }
     * })
     * 
    **/
    delete<T extends user_rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesDeleteArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_roles.
     * @param {user_rolesUpdateArgs} args - Arguments to update one User_roles.
     * @example
     * // Update one User_roles
     * const user_roles = await prisma.user_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpdateArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_roles.
     * @param {user_rolesDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_roles.
     * @param {user_rolesUpsertArgs} args - Arguments to update or create a User_roles.
     * @example
     * // Update or create a User_roles
     * const user_roles = await prisma.user_roles.upsert({
     *   create: {
     *     // ... data to create a User_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles we want to update
     *   }
     * })
    **/
    upsert<T extends user_rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpsertArgs<ExtArgs>>
    ): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_roles.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_rolesCountArgs>(
      args?: Subset<T, user_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_rolesAggregateArgs>(args: Subset<T, User_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>

    /**
     * Group by User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_rolesGroupByArgs['orderBy'] }
        : { orderBy?: user_rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_roles model
   */
  readonly fields: user_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends user_roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_roles$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user_apps<T extends user_appsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_appsDefaultArgs<ExtArgs>>): Prisma__user_appsClient<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_roles model
   */ 
  interface user_rolesFieldRefs {
    readonly id: FieldRef<"user_roles", 'String'>
    readonly urut: FieldRef<"user_roles", 'Int'>
    readonly user_app_id: FieldRef<"user_roles", 'String'>
    readonly role_id: FieldRef<"user_roles", 'String'>
    readonly updatedBy: FieldRef<"user_roles", 'String'>
    readonly created_at: FieldRef<"user_roles", 'DateTime'>
    readonly updated_at: FieldRef<"user_roles", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * user_roles findUnique
   */
  export type user_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles findUniqueOrThrow
   */
  export type user_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles findFirst
   */
  export type user_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }


  /**
   * user_roles findFirstOrThrow
   */
  export type user_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }


  /**
   * user_roles findMany
   */
  export type user_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }


  /**
   * user_roles create
   */
  export type user_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_roles.
     */
    data: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
  }


  /**
   * user_roles createMany
   */
  export type user_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_roles update
   */
  export type user_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_roles.
     */
    data: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
    /**
     * Choose, which user_roles to update.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles updateMany
   */
  export type user_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput
  }


  /**
   * user_roles upsert
   */
  export type user_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_roles to update in case it exists.
     */
    where: user_rolesWhereUniqueInput
    /**
     * In case the user_roles found by the `where` argument doesn't exist, create a new user_roles with this data.
     */
    create: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
    /**
     * In case the user_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
  }


  /**
   * user_roles delete
   */
  export type user_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter which user_roles to delete.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles deleteMany
   */
  export type user_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_rolesWhereInput
  }


  /**
   * user_roles.users
   */
  export type user_roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * user_roles without action
   */
  export type user_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    google_id: string | null
    avatar: string | null
    nama: string | null
    username: string | null
    email: string | null
    phone: string | null
    email_verified_at: Date | null
    password: string | null
    isActive: boolean | null
    code: string | null
    codeExpiredAt: Date | null
    codeResendAt: Date | null
    lastSeenAt: Date | null
    token: string | null
    tokenRefresh: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    google_id: string | null
    avatar: string | null
    nama: string | null
    username: string | null
    email: string | null
    phone: string | null
    email_verified_at: Date | null
    password: string | null
    isActive: boolean | null
    code: string | null
    codeExpiredAt: Date | null
    codeResendAt: Date | null
    lastSeenAt: Date | null
    token: string | null
    tokenRefresh: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    google_id: number
    avatar: number
    nama: number
    username: number
    email: number
    phone: number
    email_verified_at: number
    password: number
    isActive: number
    code: number
    codeExpiredAt: number
    codeResendAt: number
    lastSeenAt: number
    token: number
    tokenRefresh: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    google_id?: true
    avatar?: true
    nama?: true
    username?: true
    email?: true
    phone?: true
    email_verified_at?: true
    password?: true
    isActive?: true
    code?: true
    codeExpiredAt?: true
    codeResendAt?: true
    lastSeenAt?: true
    token?: true
    tokenRefresh?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    google_id?: true
    avatar?: true
    nama?: true
    username?: true
    email?: true
    phone?: true
    email_verified_at?: true
    password?: true
    isActive?: true
    code?: true
    codeExpiredAt?: true
    codeResendAt?: true
    lastSeenAt?: true
    token?: true
    tokenRefresh?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    google_id?: true
    avatar?: true
    nama?: true
    username?: true
    email?: true
    phone?: true
    email_verified_at?: true
    password?: true
    isActive?: true
    code?: true
    codeExpiredAt?: true
    codeResendAt?: true
    lastSeenAt?: true
    token?: true
    tokenRefresh?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    google_id: string | null
    avatar: string | null
    nama: string
    username: string
    email: string | null
    phone: string | null
    email_verified_at: Date | null
    password: string
    isActive: boolean
    code: string | null
    codeExpiredAt: Date | null
    codeResendAt: Date | null
    lastSeenAt: Date | null
    token: string | null
    tokenRefresh: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    google_id?: boolean
    avatar?: boolean
    nama?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    email_verified_at?: boolean
    password?: boolean
    isActive?: boolean
    code?: boolean
    codeExpiredAt?: boolean
    codeResendAt?: boolean
    lastSeenAt?: boolean
    token?: boolean
    tokenRefresh?: boolean
    created_at?: boolean
    updated_at?: boolean
    apps?: boolean | users$appsArgs<ExtArgs>
    filturs?: boolean | users$filtursArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    user_apps_user_apps_user_idTousers?: boolean | users$user_apps_user_apps_user_idTousersArgs<ExtArgs>
    user_apps_user_apps_updatedByTousers?: boolean | users$user_apps_user_apps_updatedByTousersArgs<ExtArgs>
    user_filturs?: boolean | users$user_filtursArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    google_id?: boolean
    avatar?: boolean
    nama?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    email_verified_at?: boolean
    password?: boolean
    isActive?: boolean
    code?: boolean
    codeExpiredAt?: boolean
    codeResendAt?: boolean
    lastSeenAt?: boolean
    token?: boolean
    tokenRefresh?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | users$appsArgs<ExtArgs>
    filturs?: boolean | users$filtursArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    user_apps_user_apps_user_idTousers?: boolean | users$user_apps_user_apps_user_idTousersArgs<ExtArgs>
    user_apps_user_apps_updatedByTousers?: boolean | users$user_apps_user_apps_updatedByTousersArgs<ExtArgs>
    user_filturs?: boolean | users$user_filtursArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      apps: Prisma.$appsPayload<ExtArgs>[]
      filturs: Prisma.$filtursPayload<ExtArgs>[]
      roles: Prisma.$rolesPayload<ExtArgs>[]
      user_apps_user_apps_user_idTousers: Prisma.$user_appsPayload<ExtArgs>[]
      user_apps_user_apps_updatedByTousers: Prisma.$user_appsPayload<ExtArgs>[]
      user_filturs: Prisma.$user_filtursPayload<ExtArgs>[]
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      google_id: string | null
      avatar: string | null
      nama: string
      username: string
      email: string | null
      phone: string | null
      email_verified_at: Date | null
      password: string
      isActive: boolean
      code: string | null
      codeExpiredAt: Date | null
      codeResendAt: Date | null
      lastSeenAt: Date | null
      token: string | null
      tokenRefresh: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    apps<T extends users$appsArgs<ExtArgs> = {}>(args?: Subset<T, users$appsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appsPayload<ExtArgs>, T, 'findMany'> | Null>;

    filturs<T extends users$filtursArgs<ExtArgs> = {}>(args?: Subset<T, users$filtursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filtursPayload<ExtArgs>, T, 'findMany'> | Null>;

    roles<T extends users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_apps_user_apps_user_idTousers<T extends users$user_apps_user_apps_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$user_apps_user_apps_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_apps_user_apps_updatedByTousers<T extends users$user_apps_user_apps_updatedByTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$user_apps_user_apps_updatedByTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_appsPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_filturs<T extends users$user_filtursArgs<ExtArgs> = {}>(args?: Subset<T, users$user_filtursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filtursPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_roles<T extends users$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly google_id: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly nama: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly isActive: FieldRef<"users", 'Boolean'>
    readonly code: FieldRef<"users", 'String'>
    readonly codeExpiredAt: FieldRef<"users", 'DateTime'>
    readonly codeResendAt: FieldRef<"users", 'DateTime'>
    readonly lastSeenAt: FieldRef<"users", 'DateTime'>
    readonly token: FieldRef<"users", 'String'>
    readonly tokenRefresh: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.apps
   */
  export type users$appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude<ExtArgs> | null
    where?: appsWhereInput
    orderBy?: appsOrderByWithRelationInput | appsOrderByWithRelationInput[]
    cursor?: appsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppsScalarFieldEnum | AppsScalarFieldEnum[]
  }


  /**
   * users.filturs
   */
  export type users$filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the filturs
     */
    select?: filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: filtursInclude<ExtArgs> | null
    where?: filtursWhereInput
    orderBy?: filtursOrderByWithRelationInput | filtursOrderByWithRelationInput[]
    cursor?: filtursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiltursScalarFieldEnum | FiltursScalarFieldEnum[]
  }


  /**
   * users.roles
   */
  export type users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    cursor?: rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * users.user_apps_user_apps_user_idTousers
   */
  export type users$user_apps_user_apps_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    where?: user_appsWhereInput
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    cursor?: user_appsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_appsScalarFieldEnum | User_appsScalarFieldEnum[]
  }


  /**
   * users.user_apps_user_apps_updatedByTousers
   */
  export type users$user_apps_user_apps_updatedByTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_apps
     */
    select?: user_appsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appsInclude<ExtArgs> | null
    where?: user_appsWhereInput
    orderBy?: user_appsOrderByWithRelationInput | user_appsOrderByWithRelationInput[]
    cursor?: user_appsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_appsScalarFieldEnum | User_appsScalarFieldEnum[]
  }


  /**
   * users.user_filturs
   */
  export type users$user_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_filturs
     */
    select?: user_filtursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_filtursInclude<ExtArgs> | null
    where?: user_filtursWhereInput
    orderBy?: user_filtursOrderByWithRelationInput | user_filtursOrderByWithRelationInput[]
    cursor?: user_filtursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_filtursScalarFieldEnum | User_filtursScalarFieldEnum[]
  }


  /**
   * users.user_roles
   */
  export type users$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppsScalarFieldEnum: {
    id: 'id',
    urut: 'urut',
    nama: 'nama',
    img: 'img',
    keterangan: 'keterangan',
    url: 'url',
    isLocal: 'isLocal',
    isAkun: 'isAkun',
    isMaintenace: 'isMaintenace',
    isActive: 'isActive',
    storage_folder: 'storage_folder',
    updatedBy: 'updatedBy',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AppsScalarFieldEnum = (typeof AppsScalarFieldEnum)[keyof typeof AppsScalarFieldEnum]


  export const FiltursScalarFieldEnum: {
    id: 'id',
    urut: 'urut',
    nama: 'nama',
    img: 'img',
    keterangan: 'keterangan',
    url: 'url',
    app_id: 'app_id',
    updatedBy: 'updatedBy',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type FiltursScalarFieldEnum = (typeof FiltursScalarFieldEnum)[keyof typeof FiltursScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    urut: 'urut',
    nama: 'nama',
    img: 'img',
    keterangan: 'keterangan',
    url: 'url',
    app_id: 'app_id',
    updatedBy: 'updatedBy',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const User_appsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    app_id: 'app_id',
    updatedBy: 'updatedBy',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_appsScalarFieldEnum = (typeof User_appsScalarFieldEnum)[keyof typeof User_appsScalarFieldEnum]


  export const User_filtursScalarFieldEnum: {
    id: 'id',
    urut: 'urut',
    user_app_id: 'user_app_id',
    filtur_id: 'filtur_id',
    updatedBy: 'updatedBy',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_filtursScalarFieldEnum = (typeof User_filtursScalarFieldEnum)[keyof typeof User_filtursScalarFieldEnum]


  export const User_rolesScalarFieldEnum: {
    id: 'id',
    urut: 'urut',
    user_app_id: 'user_app_id',
    role_id: 'role_id',
    updatedBy: 'updatedBy',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    google_id: 'google_id',
    avatar: 'avatar',
    nama: 'nama',
    username: 'username',
    email: 'email',
    phone: 'phone',
    email_verified_at: 'email_verified_at',
    password: 'password',
    isActive: 'isActive',
    code: 'code',
    codeExpiredAt: 'codeExpiredAt',
    codeResendAt: 'codeResendAt',
    lastSeenAt: 'lastSeenAt',
    token: 'token',
    tokenRefresh: 'tokenRefresh',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type appsWhereInput = {
    AND?: appsWhereInput | appsWhereInput[]
    OR?: appsWhereInput[]
    NOT?: appsWhereInput | appsWhereInput[]
    id?: StringFilter<"apps"> | string
    urut?: IntNullableFilter<"apps"> | number | null
    nama?: StringFilter<"apps"> | string
    img?: StringNullableFilter<"apps"> | string | null
    keterangan?: StringNullableFilter<"apps"> | string | null
    url?: StringNullableFilter<"apps"> | string | null
    isLocal?: BoolFilter<"apps"> | boolean
    isAkun?: BoolFilter<"apps"> | boolean
    isMaintenace?: BoolFilter<"apps"> | boolean
    isActive?: BoolFilter<"apps"> | boolean
    storage_folder?: StringNullableFilter<"apps"> | string | null
    updatedBy?: StringNullableFilter<"apps"> | string | null
    created_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    filturs?: FiltursListRelationFilter
    roles?: RolesListRelationFilter
    other_user_apps?: User_appsListRelationFilter
  }

  export type appsOrderByWithRelationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    nama?: SortOrder
    img?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    isLocal?: SortOrder
    isAkun?: SortOrder
    isMaintenace?: SortOrder
    isActive?: SortOrder
    storage_folder?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    filturs?: filtursOrderByRelationAggregateInput
    roles?: rolesOrderByRelationAggregateInput
    other_user_apps?: user_appsOrderByRelationAggregateInput
  }

  export type appsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: appsWhereInput | appsWhereInput[]
    OR?: appsWhereInput[]
    NOT?: appsWhereInput | appsWhereInput[]
    urut?: IntNullableFilter<"apps"> | number | null
    nama?: StringFilter<"apps"> | string
    img?: StringNullableFilter<"apps"> | string | null
    keterangan?: StringNullableFilter<"apps"> | string | null
    url?: StringNullableFilter<"apps"> | string | null
    isLocal?: BoolFilter<"apps"> | boolean
    isAkun?: BoolFilter<"apps"> | boolean
    isMaintenace?: BoolFilter<"apps"> | boolean
    isActive?: BoolFilter<"apps"> | boolean
    storage_folder?: StringNullableFilter<"apps"> | string | null
    updatedBy?: StringNullableFilter<"apps"> | string | null
    created_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    filturs?: FiltursListRelationFilter
    roles?: RolesListRelationFilter
    other_user_apps?: User_appsListRelationFilter
  }, "id">

  export type appsOrderByWithAggregationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    nama?: SortOrder
    img?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    isLocal?: SortOrder
    isAkun?: SortOrder
    isMaintenace?: SortOrder
    isActive?: SortOrder
    storage_folder?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: appsCountOrderByAggregateInput
    _avg?: appsAvgOrderByAggregateInput
    _max?: appsMaxOrderByAggregateInput
    _min?: appsMinOrderByAggregateInput
    _sum?: appsSumOrderByAggregateInput
  }

  export type appsScalarWhereWithAggregatesInput = {
    AND?: appsScalarWhereWithAggregatesInput | appsScalarWhereWithAggregatesInput[]
    OR?: appsScalarWhereWithAggregatesInput[]
    NOT?: appsScalarWhereWithAggregatesInput | appsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"apps"> | string
    urut?: IntNullableWithAggregatesFilter<"apps"> | number | null
    nama?: StringWithAggregatesFilter<"apps"> | string
    img?: StringNullableWithAggregatesFilter<"apps"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"apps"> | string | null
    url?: StringNullableWithAggregatesFilter<"apps"> | string | null
    isLocal?: BoolWithAggregatesFilter<"apps"> | boolean
    isAkun?: BoolWithAggregatesFilter<"apps"> | boolean
    isMaintenace?: BoolWithAggregatesFilter<"apps"> | boolean
    isActive?: BoolWithAggregatesFilter<"apps"> | boolean
    storage_folder?: StringNullableWithAggregatesFilter<"apps"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"apps"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"apps"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"apps"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"apps"> | Date | string | null
  }

  export type filtursWhereInput = {
    AND?: filtursWhereInput | filtursWhereInput[]
    OR?: filtursWhereInput[]
    NOT?: filtursWhereInput | filtursWhereInput[]
    id?: StringFilter<"filturs"> | string
    urut?: IntNullableFilter<"filturs"> | number | null
    nama?: StringFilter<"filturs"> | string
    img?: StringNullableFilter<"filturs"> | string | null
    keterangan?: StringNullableFilter<"filturs"> | string | null
    url?: StringNullableFilter<"filturs"> | string | null
    app_id?: StringFilter<"filturs"> | string
    updatedBy?: StringNullableFilter<"filturs"> | string | null
    created_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    apps?: XOR<AppsRelationFilter, appsWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_filturs?: User_filtursListRelationFilter
  }

  export type filtursOrderByWithRelationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    nama?: SortOrder
    img?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    apps?: appsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    user_filturs?: user_filtursOrderByRelationAggregateInput
  }

  export type filtursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: filtursWhereInput | filtursWhereInput[]
    OR?: filtursWhereInput[]
    NOT?: filtursWhereInput | filtursWhereInput[]
    urut?: IntNullableFilter<"filturs"> | number | null
    nama?: StringFilter<"filturs"> | string
    img?: StringNullableFilter<"filturs"> | string | null
    keterangan?: StringNullableFilter<"filturs"> | string | null
    url?: StringNullableFilter<"filturs"> | string | null
    app_id?: StringFilter<"filturs"> | string
    updatedBy?: StringNullableFilter<"filturs"> | string | null
    created_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    apps?: XOR<AppsRelationFilter, appsWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_filturs?: User_filtursListRelationFilter
  }, "id">

  export type filtursOrderByWithAggregationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    nama?: SortOrder
    img?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: filtursCountOrderByAggregateInput
    _avg?: filtursAvgOrderByAggregateInput
    _max?: filtursMaxOrderByAggregateInput
    _min?: filtursMinOrderByAggregateInput
    _sum?: filtursSumOrderByAggregateInput
  }

  export type filtursScalarWhereWithAggregatesInput = {
    AND?: filtursScalarWhereWithAggregatesInput | filtursScalarWhereWithAggregatesInput[]
    OR?: filtursScalarWhereWithAggregatesInput[]
    NOT?: filtursScalarWhereWithAggregatesInput | filtursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"filturs"> | string
    urut?: IntNullableWithAggregatesFilter<"filturs"> | number | null
    nama?: StringWithAggregatesFilter<"filturs"> | string
    img?: StringNullableWithAggregatesFilter<"filturs"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"filturs"> | string | null
    url?: StringNullableWithAggregatesFilter<"filturs"> | string | null
    app_id?: StringWithAggregatesFilter<"filturs"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"filturs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"filturs"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"filturs"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"filturs"> | Date | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: StringFilter<"roles"> | string
    urut?: IntNullableFilter<"roles"> | number | null
    nama?: StringFilter<"roles"> | string
    img?: StringNullableFilter<"roles"> | string | null
    keterangan?: StringNullableFilter<"roles"> | string | null
    url?: StringNullableFilter<"roles"> | string | null
    app_id?: StringFilter<"roles"> | string
    updatedBy?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    apps?: XOR<AppsRelationFilter, appsWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_roles?: User_rolesListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    nama?: SortOrder
    img?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    apps?: appsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    urut?: IntNullableFilter<"roles"> | number | null
    nama?: StringFilter<"roles"> | string
    img?: StringNullableFilter<"roles"> | string | null
    keterangan?: StringNullableFilter<"roles"> | string | null
    url?: StringNullableFilter<"roles"> | string | null
    app_id?: StringFilter<"roles"> | string
    updatedBy?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    apps?: XOR<AppsRelationFilter, appsWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_roles?: User_rolesListRelationFilter
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    nama?: SortOrder
    img?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"roles"> | string
    urut?: IntNullableWithAggregatesFilter<"roles"> | number | null
    nama?: StringWithAggregatesFilter<"roles"> | string
    img?: StringNullableWithAggregatesFilter<"roles"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"roles"> | string | null
    url?: StringNullableWithAggregatesFilter<"roles"> | string | null
    app_id?: StringWithAggregatesFilter<"roles"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"roles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type user_appsWhereInput = {
    AND?: user_appsWhereInput | user_appsWhereInput[]
    OR?: user_appsWhereInput[]
    NOT?: user_appsWhereInput | user_appsWhereInput[]
    id?: StringFilter<"user_apps"> | string
    user_id?: StringFilter<"user_apps"> | string
    app_id?: StringFilter<"user_apps"> | string
    updatedBy?: StringNullableFilter<"user_apps"> | string | null
    created_at?: DateTimeNullableFilter<"user_apps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_apps"> | Date | string | null
    users_user_apps_user_idTousers?: XOR<UsersRelationFilter, usersWhereInput>
    apps?: XOR<AppsRelationFilter, appsWhereInput>
    users_user_apps_updatedByTousers?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_filturs?: User_filtursListRelationFilter
    user_roles?: User_rolesListRelationFilter
  }

  export type user_appsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users_user_apps_user_idTousers?: usersOrderByWithRelationInput
    apps?: appsOrderByWithRelationInput
    users_user_apps_updatedByTousers?: usersOrderByWithRelationInput
    user_filturs?: user_filtursOrderByRelationAggregateInput
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type user_appsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_appsWhereInput | user_appsWhereInput[]
    OR?: user_appsWhereInput[]
    NOT?: user_appsWhereInput | user_appsWhereInput[]
    user_id?: StringFilter<"user_apps"> | string
    app_id?: StringFilter<"user_apps"> | string
    updatedBy?: StringNullableFilter<"user_apps"> | string | null
    created_at?: DateTimeNullableFilter<"user_apps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_apps"> | Date | string | null
    users_user_apps_user_idTousers?: XOR<UsersRelationFilter, usersWhereInput>
    apps?: XOR<AppsRelationFilter, appsWhereInput>
    users_user_apps_updatedByTousers?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_filturs?: User_filtursListRelationFilter
    user_roles?: User_rolesListRelationFilter
  }, "id">

  export type user_appsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_appsCountOrderByAggregateInput
    _max?: user_appsMaxOrderByAggregateInput
    _min?: user_appsMinOrderByAggregateInput
  }

  export type user_appsScalarWhereWithAggregatesInput = {
    AND?: user_appsScalarWhereWithAggregatesInput | user_appsScalarWhereWithAggregatesInput[]
    OR?: user_appsScalarWhereWithAggregatesInput[]
    NOT?: user_appsScalarWhereWithAggregatesInput | user_appsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_apps"> | string
    user_id?: StringWithAggregatesFilter<"user_apps"> | string
    app_id?: StringWithAggregatesFilter<"user_apps"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"user_apps"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_apps"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_apps"> | Date | string | null
  }

  export type user_filtursWhereInput = {
    AND?: user_filtursWhereInput | user_filtursWhereInput[]
    OR?: user_filtursWhereInput[]
    NOT?: user_filtursWhereInput | user_filtursWhereInput[]
    id?: StringFilter<"user_filturs"> | string
    urut?: IntNullableFilter<"user_filturs"> | number | null
    user_app_id?: StringFilter<"user_filturs"> | string
    filtur_id?: StringFilter<"user_filturs"> | string
    updatedBy?: StringNullableFilter<"user_filturs"> | string | null
    created_at?: DateTimeNullableFilter<"user_filturs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_filturs"> | Date | string | null
    filturs?: XOR<FiltursRelationFilter, filtursWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_apps?: XOR<User_appsRelationFilter, user_appsWhereInput>
  }

  export type user_filtursOrderByWithRelationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    user_app_id?: SortOrder
    filtur_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    filturs?: filtursOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    user_apps?: user_appsOrderByWithRelationInput
  }

  export type user_filtursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_filtursWhereInput | user_filtursWhereInput[]
    OR?: user_filtursWhereInput[]
    NOT?: user_filtursWhereInput | user_filtursWhereInput[]
    urut?: IntNullableFilter<"user_filturs"> | number | null
    user_app_id?: StringFilter<"user_filturs"> | string
    filtur_id?: StringFilter<"user_filturs"> | string
    updatedBy?: StringNullableFilter<"user_filturs"> | string | null
    created_at?: DateTimeNullableFilter<"user_filturs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_filturs"> | Date | string | null
    filturs?: XOR<FiltursRelationFilter, filtursWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_apps?: XOR<User_appsRelationFilter, user_appsWhereInput>
  }, "id">

  export type user_filtursOrderByWithAggregationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    user_app_id?: SortOrder
    filtur_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_filtursCountOrderByAggregateInput
    _avg?: user_filtursAvgOrderByAggregateInput
    _max?: user_filtursMaxOrderByAggregateInput
    _min?: user_filtursMinOrderByAggregateInput
    _sum?: user_filtursSumOrderByAggregateInput
  }

  export type user_filtursScalarWhereWithAggregatesInput = {
    AND?: user_filtursScalarWhereWithAggregatesInput | user_filtursScalarWhereWithAggregatesInput[]
    OR?: user_filtursScalarWhereWithAggregatesInput[]
    NOT?: user_filtursScalarWhereWithAggregatesInput | user_filtursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_filturs"> | string
    urut?: IntNullableWithAggregatesFilter<"user_filturs"> | number | null
    user_app_id?: StringWithAggregatesFilter<"user_filturs"> | string
    filtur_id?: StringWithAggregatesFilter<"user_filturs"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"user_filturs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_filturs"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_filturs"> | Date | string | null
  }

  export type user_rolesWhereInput = {
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    id?: StringFilter<"user_roles"> | string
    urut?: IntNullableFilter<"user_roles"> | number | null
    user_app_id?: StringFilter<"user_roles"> | string
    role_id?: StringFilter<"user_roles"> | string
    updatedBy?: StringNullableFilter<"user_roles"> | string | null
    created_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_apps?: XOR<User_appsRelationFilter, user_appsWhereInput>
  }

  export type user_rolesOrderByWithRelationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    user_app_id?: SortOrder
    role_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    roles?: rolesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    user_apps?: user_appsOrderByWithRelationInput
  }

  export type user_rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    urut?: IntNullableFilter<"user_roles"> | number | null
    user_app_id?: StringFilter<"user_roles"> | string
    role_id?: StringFilter<"user_roles"> | string
    updatedBy?: StringNullableFilter<"user_roles"> | string | null
    created_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    user_apps?: XOR<User_appsRelationFilter, user_appsWhereInput>
  }, "id">

  export type user_rolesOrderByWithAggregationInput = {
    id?: SortOrder
    urut?: SortOrderInput | SortOrder
    user_app_id?: SortOrder
    role_id?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_rolesCountOrderByAggregateInput
    _avg?: user_rolesAvgOrderByAggregateInput
    _max?: user_rolesMaxOrderByAggregateInput
    _min?: user_rolesMinOrderByAggregateInput
    _sum?: user_rolesSumOrderByAggregateInput
  }

  export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    OR?: user_rolesScalarWhereWithAggregatesInput[]
    NOT?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_roles"> | string
    urut?: IntNullableWithAggregatesFilter<"user_roles"> | number | null
    user_app_id?: StringWithAggregatesFilter<"user_roles"> | string
    role_id?: StringWithAggregatesFilter<"user_roles"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"user_roles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_roles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_roles"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    google_id?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    nama?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    isActive?: BoolFilter<"users"> | boolean
    code?: StringNullableFilter<"users"> | string | null
    codeExpiredAt?: DateTimeNullableFilter<"users"> | Date | string | null
    codeResendAt?: DateTimeNullableFilter<"users"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"users"> | Date | string | null
    token?: StringNullableFilter<"users"> | string | null
    tokenRefresh?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    apps?: AppsListRelationFilter
    filturs?: FiltursListRelationFilter
    roles?: RolesListRelationFilter
    user_apps_user_apps_user_idTousers?: User_appsListRelationFilter
    user_apps_user_apps_updatedByTousers?: User_appsListRelationFilter
    user_filturs?: User_filtursListRelationFilter
    user_roles?: User_rolesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    google_id?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrderInput | SortOrder
    codeExpiredAt?: SortOrderInput | SortOrder
    codeResendAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenRefresh?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    apps?: appsOrderByRelationAggregateInput
    filturs?: filtursOrderByRelationAggregateInput
    roles?: rolesOrderByRelationAggregateInput
    user_apps_user_apps_user_idTousers?: user_appsOrderByRelationAggregateInput
    user_apps_user_apps_updatedByTousers?: user_appsOrderByRelationAggregateInput
    user_filturs?: user_filtursOrderByRelationAggregateInput
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    phone?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    google_id?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    nama?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    isActive?: BoolFilter<"users"> | boolean
    code?: StringNullableFilter<"users"> | string | null
    codeExpiredAt?: DateTimeNullableFilter<"users"> | Date | string | null
    codeResendAt?: DateTimeNullableFilter<"users"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"users"> | Date | string | null
    token?: StringNullableFilter<"users"> | string | null
    tokenRefresh?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    apps?: AppsListRelationFilter
    filturs?: FiltursListRelationFilter
    roles?: RolesListRelationFilter
    user_apps_user_apps_user_idTousers?: User_appsListRelationFilter
    user_apps_user_apps_updatedByTousers?: User_appsListRelationFilter
    user_filturs?: User_filtursListRelationFilter
    user_roles?: User_rolesListRelationFilter
  }, "id" | "username" | "email" | "phone">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    google_id?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrderInput | SortOrder
    codeExpiredAt?: SortOrderInput | SortOrder
    codeResendAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenRefresh?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    google_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    nama?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    isActive?: BoolWithAggregatesFilter<"users"> | boolean
    code?: StringNullableWithAggregatesFilter<"users"> | string | null
    codeExpiredAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    codeResendAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    token?: StringNullableWithAggregatesFilter<"users"> | string | null
    tokenRefresh?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type appsCreateInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAppsInput
    filturs?: filtursCreateNestedManyWithoutAppsInput
    roles?: rolesCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsCreateNestedManyWithoutAppsInput
  }

  export type appsUncheckedCreateInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    filturs?: filtursUncheckedCreateNestedManyWithoutAppsInput
    roles?: rolesUncheckedCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsUncheckedCreateNestedManyWithoutAppsInput
  }

  export type appsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAppsNestedInput
    filturs?: filtursUpdateManyWithoutAppsNestedInput
    roles?: rolesUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUncheckedUpdateManyWithoutAppsNestedInput
    roles?: rolesUncheckedUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type appsCreateManyInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filtursCreateInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    apps: appsCreateNestedOneWithoutFiltursInput
    users?: usersCreateNestedOneWithoutFiltursInput
    user_filturs?: user_filtursCreateNestedManyWithoutFiltursInput
  }

  export type filtursUncheckedCreateInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutFiltursInput
  }

  export type filtursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutFiltursNestedInput
    users?: usersUpdateOneWithoutFiltursNestedInput
    user_filturs?: user_filtursUpdateManyWithoutFiltursNestedInput
  }

  export type filtursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutFiltursNestedInput
  }

  export type filtursCreateManyInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type filtursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filtursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesCreateInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    apps: appsCreateNestedOneWithoutRolesInput
    users?: usersCreateNestedOneWithoutRolesInput
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutRolesNestedInput
    users?: usersUpdateOneWithoutRolesNestedInput
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_appsCreateInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_user_apps_user_idTousers: usersCreateNestedOneWithoutUser_apps_user_apps_user_idTousersInput
    apps: appsCreateNestedOneWithoutOther_user_appsInput
    users_user_apps_updatedByTousers?: usersCreateNestedOneWithoutUser_apps_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUncheckedCreateInput = {
    id: string
    user_id: string
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_user_apps_user_idTousers?: usersUpdateOneRequiredWithoutUser_apps_user_apps_user_idTousersNestedInput
    apps?: appsUpdateOneRequiredWithoutOther_user_appsNestedInput
    users_user_apps_updatedByTousers?: usersUpdateOneWithoutUser_apps_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsCreateManyInput = {
    id: string
    user_id: string
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_appsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_appsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursCreateInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    filturs: filtursCreateNestedOneWithoutUser_filtursInput
    users?: usersCreateNestedOneWithoutUser_filtursInput
    user_apps: user_appsCreateNestedOneWithoutUser_filtursInput
  }

  export type user_filtursUncheckedCreateInput = {
    id: string
    urut?: number | null
    user_app_id: string
    filtur_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUpdateOneRequiredWithoutUser_filtursNestedInput
    users?: usersUpdateOneWithoutUser_filtursNestedInput
    user_apps?: user_appsUpdateOneRequiredWithoutUser_filtursNestedInput
  }

  export type user_filtursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    filtur_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursCreateManyInput = {
    id: string
    urut?: number | null
    user_app_id: string
    filtur_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    filtur_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesCreateInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users?: usersCreateNestedOneWithoutUser_rolesInput
    user_apps: user_appsCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateInput = {
    id: string
    urut?: number | null
    user_app_id: string
    role_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users?: usersUpdateOneWithoutUser_rolesNestedInput
    user_apps?: user_appsUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesCreateManyInput = {
    id: string
    urut?: number | null
    user_app_id: string
    role_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    filturs?: filtursCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type FiltursListRelationFilter = {
    every?: filtursWhereInput
    some?: filtursWhereInput
    none?: filtursWhereInput
  }

  export type RolesListRelationFilter = {
    every?: rolesWhereInput
    some?: rolesWhereInput
    none?: rolesWhereInput
  }

  export type User_appsListRelationFilter = {
    every?: user_appsWhereInput
    some?: user_appsWhereInput
    none?: user_appsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type filtursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_appsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type appsCountOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    isLocal?: SortOrder
    isAkun?: SortOrder
    isMaintenace?: SortOrder
    isActive?: SortOrder
    storage_folder?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appsAvgOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type appsMaxOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    isLocal?: SortOrder
    isAkun?: SortOrder
    isMaintenace?: SortOrder
    isActive?: SortOrder
    storage_folder?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appsMinOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    isLocal?: SortOrder
    isAkun?: SortOrder
    isMaintenace?: SortOrder
    isActive?: SortOrder
    storage_folder?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appsSumOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppsRelationFilter = {
    is?: appsWhereInput
    isNot?: appsWhereInput
  }

  export type User_filtursListRelationFilter = {
    every?: user_filtursWhereInput
    some?: user_filtursWhereInput
    none?: user_filtursWhereInput
  }

  export type user_filtursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filtursCountOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type filtursAvgOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type filtursMaxOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type filtursMinOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type filtursSumOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type User_rolesListRelationFilter = {
    every?: user_rolesWhereInput
    some?: user_rolesWhereInput
    none?: user_rolesWhereInput
  }

  export type user_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    nama?: SortOrder
    img?: SortOrder
    keterangan?: SortOrder
    url?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_appsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_appsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_appsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    app_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FiltursRelationFilter = {
    is?: filtursWhereInput
    isNot?: filtursWhereInput
  }

  export type User_appsRelationFilter = {
    is?: user_appsWhereInput
    isNot?: user_appsWhereInput
  }

  export type user_filtursCountOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    user_app_id?: SortOrder
    filtur_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_filtursAvgOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type user_filtursMaxOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    user_app_id?: SortOrder
    filtur_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_filtursMinOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    user_app_id?: SortOrder
    filtur_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_filtursSumOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type RolesRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type user_rolesCountOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    user_app_id?: SortOrder
    role_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_rolesAvgOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type user_rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    user_app_id?: SortOrder
    role_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_rolesMinOrderByAggregateInput = {
    id?: SortOrder
    urut?: SortOrder
    user_app_id?: SortOrder
    role_id?: SortOrder
    updatedBy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_rolesSumOrderByAggregateInput = {
    urut?: SortOrder
  }

  export type AppsListRelationFilter = {
    every?: appsWhereInput
    some?: appsWhereInput
    none?: appsWhereInput
  }

  export type appsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    google_id?: SortOrder
    avatar?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    codeExpiredAt?: SortOrder
    codeResendAt?: SortOrder
    lastSeenAt?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    google_id?: SortOrder
    avatar?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    codeExpiredAt?: SortOrder
    codeResendAt?: SortOrder
    lastSeenAt?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    google_id?: SortOrder
    avatar?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    code?: SortOrder
    codeExpiredAt?: SortOrder
    codeResendAt?: SortOrder
    lastSeenAt?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersCreateNestedOneWithoutAppsInput = {
    create?: XOR<usersCreateWithoutAppsInput, usersUncheckedCreateWithoutAppsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAppsInput
    connect?: usersWhereUniqueInput
  }

  export type filtursCreateNestedManyWithoutAppsInput = {
    create?: XOR<filtursCreateWithoutAppsInput, filtursUncheckedCreateWithoutAppsInput> | filtursCreateWithoutAppsInput[] | filtursUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutAppsInput | filtursCreateOrConnectWithoutAppsInput[]
    createMany?: filtursCreateManyAppsInputEnvelope
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
  }

  export type rolesCreateNestedManyWithoutAppsInput = {
    create?: XOR<rolesCreateWithoutAppsInput, rolesUncheckedCreateWithoutAppsInput> | rolesCreateWithoutAppsInput[] | rolesUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutAppsInput | rolesCreateOrConnectWithoutAppsInput[]
    createMany?: rolesCreateManyAppsInputEnvelope
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type user_appsCreateNestedManyWithoutAppsInput = {
    create?: XOR<user_appsCreateWithoutAppsInput, user_appsUncheckedCreateWithoutAppsInput> | user_appsCreateWithoutAppsInput[] | user_appsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutAppsInput | user_appsCreateOrConnectWithoutAppsInput[]
    createMany?: user_appsCreateManyAppsInputEnvelope
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
  }

  export type filtursUncheckedCreateNestedManyWithoutAppsInput = {
    create?: XOR<filtursCreateWithoutAppsInput, filtursUncheckedCreateWithoutAppsInput> | filtursCreateWithoutAppsInput[] | filtursUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutAppsInput | filtursCreateOrConnectWithoutAppsInput[]
    createMany?: filtursCreateManyAppsInputEnvelope
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
  }

  export type rolesUncheckedCreateNestedManyWithoutAppsInput = {
    create?: XOR<rolesCreateWithoutAppsInput, rolesUncheckedCreateWithoutAppsInput> | rolesCreateWithoutAppsInput[] | rolesUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutAppsInput | rolesCreateOrConnectWithoutAppsInput[]
    createMany?: rolesCreateManyAppsInputEnvelope
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type user_appsUncheckedCreateNestedManyWithoutAppsInput = {
    create?: XOR<user_appsCreateWithoutAppsInput, user_appsUncheckedCreateWithoutAppsInput> | user_appsCreateWithoutAppsInput[] | user_appsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutAppsInput | user_appsCreateOrConnectWithoutAppsInput[]
    createMany?: user_appsCreateManyAppsInputEnvelope
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutAppsNestedInput = {
    create?: XOR<usersCreateWithoutAppsInput, usersUncheckedCreateWithoutAppsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAppsInput
    upsert?: usersUpsertWithoutAppsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAppsInput, usersUpdateWithoutAppsInput>, usersUncheckedUpdateWithoutAppsInput>
  }

  export type filtursUpdateManyWithoutAppsNestedInput = {
    create?: XOR<filtursCreateWithoutAppsInput, filtursUncheckedCreateWithoutAppsInput> | filtursCreateWithoutAppsInput[] | filtursUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutAppsInput | filtursCreateOrConnectWithoutAppsInput[]
    upsert?: filtursUpsertWithWhereUniqueWithoutAppsInput | filtursUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: filtursCreateManyAppsInputEnvelope
    set?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    disconnect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    delete?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    update?: filtursUpdateWithWhereUniqueWithoutAppsInput | filtursUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: filtursUpdateManyWithWhereWithoutAppsInput | filtursUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: filtursScalarWhereInput | filtursScalarWhereInput[]
  }

  export type rolesUpdateManyWithoutAppsNestedInput = {
    create?: XOR<rolesCreateWithoutAppsInput, rolesUncheckedCreateWithoutAppsInput> | rolesCreateWithoutAppsInput[] | rolesUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutAppsInput | rolesCreateOrConnectWithoutAppsInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutAppsInput | rolesUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: rolesCreateManyAppsInputEnvelope
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutAppsInput | rolesUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutAppsInput | rolesUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type user_appsUpdateManyWithoutAppsNestedInput = {
    create?: XOR<user_appsCreateWithoutAppsInput, user_appsUncheckedCreateWithoutAppsInput> | user_appsCreateWithoutAppsInput[] | user_appsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutAppsInput | user_appsCreateOrConnectWithoutAppsInput[]
    upsert?: user_appsUpsertWithWhereUniqueWithoutAppsInput | user_appsUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: user_appsCreateManyAppsInputEnvelope
    set?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    disconnect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    delete?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    update?: user_appsUpdateWithWhereUniqueWithoutAppsInput | user_appsUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: user_appsUpdateManyWithWhereWithoutAppsInput | user_appsUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
  }

  export type filtursUncheckedUpdateManyWithoutAppsNestedInput = {
    create?: XOR<filtursCreateWithoutAppsInput, filtursUncheckedCreateWithoutAppsInput> | filtursCreateWithoutAppsInput[] | filtursUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutAppsInput | filtursCreateOrConnectWithoutAppsInput[]
    upsert?: filtursUpsertWithWhereUniqueWithoutAppsInput | filtursUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: filtursCreateManyAppsInputEnvelope
    set?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    disconnect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    delete?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    update?: filtursUpdateWithWhereUniqueWithoutAppsInput | filtursUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: filtursUpdateManyWithWhereWithoutAppsInput | filtursUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: filtursScalarWhereInput | filtursScalarWhereInput[]
  }

  export type rolesUncheckedUpdateManyWithoutAppsNestedInput = {
    create?: XOR<rolesCreateWithoutAppsInput, rolesUncheckedCreateWithoutAppsInput> | rolesCreateWithoutAppsInput[] | rolesUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutAppsInput | rolesCreateOrConnectWithoutAppsInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutAppsInput | rolesUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: rolesCreateManyAppsInputEnvelope
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutAppsInput | rolesUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutAppsInput | rolesUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type user_appsUncheckedUpdateManyWithoutAppsNestedInput = {
    create?: XOR<user_appsCreateWithoutAppsInput, user_appsUncheckedCreateWithoutAppsInput> | user_appsCreateWithoutAppsInput[] | user_appsUncheckedCreateWithoutAppsInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutAppsInput | user_appsCreateOrConnectWithoutAppsInput[]
    upsert?: user_appsUpsertWithWhereUniqueWithoutAppsInput | user_appsUpsertWithWhereUniqueWithoutAppsInput[]
    createMany?: user_appsCreateManyAppsInputEnvelope
    set?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    disconnect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    delete?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    update?: user_appsUpdateWithWhereUniqueWithoutAppsInput | user_appsUpdateWithWhereUniqueWithoutAppsInput[]
    updateMany?: user_appsUpdateManyWithWhereWithoutAppsInput | user_appsUpdateManyWithWhereWithoutAppsInput[]
    deleteMany?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
  }

  export type appsCreateNestedOneWithoutFiltursInput = {
    create?: XOR<appsCreateWithoutFiltursInput, appsUncheckedCreateWithoutFiltursInput>
    connectOrCreate?: appsCreateOrConnectWithoutFiltursInput
    connect?: appsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFiltursInput = {
    create?: XOR<usersCreateWithoutFiltursInput, usersUncheckedCreateWithoutFiltursInput>
    connectOrCreate?: usersCreateOrConnectWithoutFiltursInput
    connect?: usersWhereUniqueInput
  }

  export type user_filtursCreateNestedManyWithoutFiltursInput = {
    create?: XOR<user_filtursCreateWithoutFiltursInput, user_filtursUncheckedCreateWithoutFiltursInput> | user_filtursCreateWithoutFiltursInput[] | user_filtursUncheckedCreateWithoutFiltursInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutFiltursInput | user_filtursCreateOrConnectWithoutFiltursInput[]
    createMany?: user_filtursCreateManyFiltursInputEnvelope
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
  }

  export type user_filtursUncheckedCreateNestedManyWithoutFiltursInput = {
    create?: XOR<user_filtursCreateWithoutFiltursInput, user_filtursUncheckedCreateWithoutFiltursInput> | user_filtursCreateWithoutFiltursInput[] | user_filtursUncheckedCreateWithoutFiltursInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutFiltursInput | user_filtursCreateOrConnectWithoutFiltursInput[]
    createMany?: user_filtursCreateManyFiltursInputEnvelope
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
  }

  export type appsUpdateOneRequiredWithoutFiltursNestedInput = {
    create?: XOR<appsCreateWithoutFiltursInput, appsUncheckedCreateWithoutFiltursInput>
    connectOrCreate?: appsCreateOrConnectWithoutFiltursInput
    upsert?: appsUpsertWithoutFiltursInput
    connect?: appsWhereUniqueInput
    update?: XOR<XOR<appsUpdateToOneWithWhereWithoutFiltursInput, appsUpdateWithoutFiltursInput>, appsUncheckedUpdateWithoutFiltursInput>
  }

  export type usersUpdateOneWithoutFiltursNestedInput = {
    create?: XOR<usersCreateWithoutFiltursInput, usersUncheckedCreateWithoutFiltursInput>
    connectOrCreate?: usersCreateOrConnectWithoutFiltursInput
    upsert?: usersUpsertWithoutFiltursInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFiltursInput, usersUpdateWithoutFiltursInput>, usersUncheckedUpdateWithoutFiltursInput>
  }

  export type user_filtursUpdateManyWithoutFiltursNestedInput = {
    create?: XOR<user_filtursCreateWithoutFiltursInput, user_filtursUncheckedCreateWithoutFiltursInput> | user_filtursCreateWithoutFiltursInput[] | user_filtursUncheckedCreateWithoutFiltursInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutFiltursInput | user_filtursCreateOrConnectWithoutFiltursInput[]
    upsert?: user_filtursUpsertWithWhereUniqueWithoutFiltursInput | user_filtursUpsertWithWhereUniqueWithoutFiltursInput[]
    createMany?: user_filtursCreateManyFiltursInputEnvelope
    set?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    disconnect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    delete?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    update?: user_filtursUpdateWithWhereUniqueWithoutFiltursInput | user_filtursUpdateWithWhereUniqueWithoutFiltursInput[]
    updateMany?: user_filtursUpdateManyWithWhereWithoutFiltursInput | user_filtursUpdateManyWithWhereWithoutFiltursInput[]
    deleteMany?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
  }

  export type user_filtursUncheckedUpdateManyWithoutFiltursNestedInput = {
    create?: XOR<user_filtursCreateWithoutFiltursInput, user_filtursUncheckedCreateWithoutFiltursInput> | user_filtursCreateWithoutFiltursInput[] | user_filtursUncheckedCreateWithoutFiltursInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutFiltursInput | user_filtursCreateOrConnectWithoutFiltursInput[]
    upsert?: user_filtursUpsertWithWhereUniqueWithoutFiltursInput | user_filtursUpsertWithWhereUniqueWithoutFiltursInput[]
    createMany?: user_filtursCreateManyFiltursInputEnvelope
    set?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    disconnect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    delete?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    update?: user_filtursUpdateWithWhereUniqueWithoutFiltursInput | user_filtursUpdateWithWhereUniqueWithoutFiltursInput[]
    updateMany?: user_filtursUpdateManyWithWhereWithoutFiltursInput | user_filtursUpdateManyWithWhereWithoutFiltursInput[]
    deleteMany?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
  }

  export type appsCreateNestedOneWithoutRolesInput = {
    create?: XOR<appsCreateWithoutRolesInput, appsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: appsCreateOrConnectWithoutRolesInput
    connect?: appsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput
    connect?: usersWhereUniqueInput
  }

  export type user_rolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type appsUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<appsCreateWithoutRolesInput, appsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: appsCreateOrConnectWithoutRolesInput
    upsert?: appsUpsertWithoutRolesInput
    connect?: appsWhereUniqueInput
    update?: XOR<XOR<appsUpdateToOneWithWhereWithoutRolesInput, appsUpdateWithoutRolesInput>, appsUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateOneWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput
    upsert?: usersUpsertWithoutRolesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRolesInput, usersUpdateWithoutRolesInput>, usersUncheckedUpdateWithoutRolesInput>
  }

  export type user_rolesUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRolesInput | user_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRolesInput | user_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRolesInput | user_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRolesInput | user_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRolesInput | user_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRolesInput | user_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_apps_user_apps_user_idTousersInput = {
    create?: XOR<usersCreateWithoutUser_apps_user_apps_user_idTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_apps_user_apps_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type appsCreateNestedOneWithoutOther_user_appsInput = {
    create?: XOR<appsCreateWithoutOther_user_appsInput, appsUncheckedCreateWithoutOther_user_appsInput>
    connectOrCreate?: appsCreateOrConnectWithoutOther_user_appsInput
    connect?: appsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_apps_user_apps_updatedByTousersInput = {
    create?: XOR<usersCreateWithoutUser_apps_user_apps_updatedByTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_updatedByTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_apps_user_apps_updatedByTousersInput
    connect?: usersWhereUniqueInput
  }

  export type user_filtursCreateNestedManyWithoutUser_appsInput = {
    create?: XOR<user_filtursCreateWithoutUser_appsInput, user_filtursUncheckedCreateWithoutUser_appsInput> | user_filtursCreateWithoutUser_appsInput[] | user_filtursUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUser_appsInput | user_filtursCreateOrConnectWithoutUser_appsInput[]
    createMany?: user_filtursCreateManyUser_appsInputEnvelope
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
  }

  export type user_rolesCreateNestedManyWithoutUser_appsInput = {
    create?: XOR<user_rolesCreateWithoutUser_appsInput, user_rolesUncheckedCreateWithoutUser_appsInput> | user_rolesCreateWithoutUser_appsInput[] | user_rolesUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUser_appsInput | user_rolesCreateOrConnectWithoutUser_appsInput[]
    createMany?: user_rolesCreateManyUser_appsInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_filtursUncheckedCreateNestedManyWithoutUser_appsInput = {
    create?: XOR<user_filtursCreateWithoutUser_appsInput, user_filtursUncheckedCreateWithoutUser_appsInput> | user_filtursCreateWithoutUser_appsInput[] | user_filtursUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUser_appsInput | user_filtursCreateOrConnectWithoutUser_appsInput[]
    createMany?: user_filtursCreateManyUser_appsInputEnvelope
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUser_appsInput = {
    create?: XOR<user_rolesCreateWithoutUser_appsInput, user_rolesUncheckedCreateWithoutUser_appsInput> | user_rolesCreateWithoutUser_appsInput[] | user_rolesUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUser_appsInput | user_rolesCreateOrConnectWithoutUser_appsInput[]
    createMany?: user_rolesCreateManyUser_appsInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutUser_apps_user_apps_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutUser_apps_user_apps_user_idTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_apps_user_apps_user_idTousersInput
    upsert?: usersUpsertWithoutUser_apps_user_apps_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_apps_user_apps_user_idTousersInput, usersUpdateWithoutUser_apps_user_apps_user_idTousersInput>, usersUncheckedUpdateWithoutUser_apps_user_apps_user_idTousersInput>
  }

  export type appsUpdateOneRequiredWithoutOther_user_appsNestedInput = {
    create?: XOR<appsCreateWithoutOther_user_appsInput, appsUncheckedCreateWithoutOther_user_appsInput>
    connectOrCreate?: appsCreateOrConnectWithoutOther_user_appsInput
    upsert?: appsUpsertWithoutOther_user_appsInput
    connect?: appsWhereUniqueInput
    update?: XOR<XOR<appsUpdateToOneWithWhereWithoutOther_user_appsInput, appsUpdateWithoutOther_user_appsInput>, appsUncheckedUpdateWithoutOther_user_appsInput>
  }

  export type usersUpdateOneWithoutUser_apps_user_apps_updatedByTousersNestedInput = {
    create?: XOR<usersCreateWithoutUser_apps_user_apps_updatedByTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_updatedByTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_apps_user_apps_updatedByTousersInput
    upsert?: usersUpsertWithoutUser_apps_user_apps_updatedByTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_apps_user_apps_updatedByTousersInput, usersUpdateWithoutUser_apps_user_apps_updatedByTousersInput>, usersUncheckedUpdateWithoutUser_apps_user_apps_updatedByTousersInput>
  }

  export type user_filtursUpdateManyWithoutUser_appsNestedInput = {
    create?: XOR<user_filtursCreateWithoutUser_appsInput, user_filtursUncheckedCreateWithoutUser_appsInput> | user_filtursCreateWithoutUser_appsInput[] | user_filtursUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUser_appsInput | user_filtursCreateOrConnectWithoutUser_appsInput[]
    upsert?: user_filtursUpsertWithWhereUniqueWithoutUser_appsInput | user_filtursUpsertWithWhereUniqueWithoutUser_appsInput[]
    createMany?: user_filtursCreateManyUser_appsInputEnvelope
    set?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    disconnect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    delete?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    update?: user_filtursUpdateWithWhereUniqueWithoutUser_appsInput | user_filtursUpdateWithWhereUniqueWithoutUser_appsInput[]
    updateMany?: user_filtursUpdateManyWithWhereWithoutUser_appsInput | user_filtursUpdateManyWithWhereWithoutUser_appsInput[]
    deleteMany?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
  }

  export type user_rolesUpdateManyWithoutUser_appsNestedInput = {
    create?: XOR<user_rolesCreateWithoutUser_appsInput, user_rolesUncheckedCreateWithoutUser_appsInput> | user_rolesCreateWithoutUser_appsInput[] | user_rolesUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUser_appsInput | user_rolesCreateOrConnectWithoutUser_appsInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUser_appsInput | user_rolesUpsertWithWhereUniqueWithoutUser_appsInput[]
    createMany?: user_rolesCreateManyUser_appsInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUser_appsInput | user_rolesUpdateWithWhereUniqueWithoutUser_appsInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUser_appsInput | user_rolesUpdateManyWithWhereWithoutUser_appsInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_filtursUncheckedUpdateManyWithoutUser_appsNestedInput = {
    create?: XOR<user_filtursCreateWithoutUser_appsInput, user_filtursUncheckedCreateWithoutUser_appsInput> | user_filtursCreateWithoutUser_appsInput[] | user_filtursUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUser_appsInput | user_filtursCreateOrConnectWithoutUser_appsInput[]
    upsert?: user_filtursUpsertWithWhereUniqueWithoutUser_appsInput | user_filtursUpsertWithWhereUniqueWithoutUser_appsInput[]
    createMany?: user_filtursCreateManyUser_appsInputEnvelope
    set?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    disconnect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    delete?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    update?: user_filtursUpdateWithWhereUniqueWithoutUser_appsInput | user_filtursUpdateWithWhereUniqueWithoutUser_appsInput[]
    updateMany?: user_filtursUpdateManyWithWhereWithoutUser_appsInput | user_filtursUpdateManyWithWhereWithoutUser_appsInput[]
    deleteMany?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUser_appsNestedInput = {
    create?: XOR<user_rolesCreateWithoutUser_appsInput, user_rolesUncheckedCreateWithoutUser_appsInput> | user_rolesCreateWithoutUser_appsInput[] | user_rolesUncheckedCreateWithoutUser_appsInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUser_appsInput | user_rolesCreateOrConnectWithoutUser_appsInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUser_appsInput | user_rolesUpsertWithWhereUniqueWithoutUser_appsInput[]
    createMany?: user_rolesCreateManyUser_appsInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUser_appsInput | user_rolesUpdateWithWhereUniqueWithoutUser_appsInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUser_appsInput | user_rolesUpdateManyWithWhereWithoutUser_appsInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type filtursCreateNestedOneWithoutUser_filtursInput = {
    create?: XOR<filtursCreateWithoutUser_filtursInput, filtursUncheckedCreateWithoutUser_filtursInput>
    connectOrCreate?: filtursCreateOrConnectWithoutUser_filtursInput
    connect?: filtursWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_filtursInput = {
    create?: XOR<usersCreateWithoutUser_filtursInput, usersUncheckedCreateWithoutUser_filtursInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_filtursInput
    connect?: usersWhereUniqueInput
  }

  export type user_appsCreateNestedOneWithoutUser_filtursInput = {
    create?: XOR<user_appsCreateWithoutUser_filtursInput, user_appsUncheckedCreateWithoutUser_filtursInput>
    connectOrCreate?: user_appsCreateOrConnectWithoutUser_filtursInput
    connect?: user_appsWhereUniqueInput
  }

  export type filtursUpdateOneRequiredWithoutUser_filtursNestedInput = {
    create?: XOR<filtursCreateWithoutUser_filtursInput, filtursUncheckedCreateWithoutUser_filtursInput>
    connectOrCreate?: filtursCreateOrConnectWithoutUser_filtursInput
    upsert?: filtursUpsertWithoutUser_filtursInput
    connect?: filtursWhereUniqueInput
    update?: XOR<XOR<filtursUpdateToOneWithWhereWithoutUser_filtursInput, filtursUpdateWithoutUser_filtursInput>, filtursUncheckedUpdateWithoutUser_filtursInput>
  }

  export type usersUpdateOneWithoutUser_filtursNestedInput = {
    create?: XOR<usersCreateWithoutUser_filtursInput, usersUncheckedCreateWithoutUser_filtursInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_filtursInput
    upsert?: usersUpsertWithoutUser_filtursInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_filtursInput, usersUpdateWithoutUser_filtursInput>, usersUncheckedUpdateWithoutUser_filtursInput>
  }

  export type user_appsUpdateOneRequiredWithoutUser_filtursNestedInput = {
    create?: XOR<user_appsCreateWithoutUser_filtursInput, user_appsUncheckedCreateWithoutUser_filtursInput>
    connectOrCreate?: user_appsCreateOrConnectWithoutUser_filtursInput
    upsert?: user_appsUpsertWithoutUser_filtursInput
    connect?: user_appsWhereUniqueInput
    update?: XOR<XOR<user_appsUpdateToOneWithWhereWithoutUser_filtursInput, user_appsUpdateWithoutUser_filtursInput>, user_appsUncheckedUpdateWithoutUser_filtursInput>
  }

  export type rolesCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type user_appsCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<user_appsCreateWithoutUser_rolesInput, user_appsUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: user_appsCreateOrConnectWithoutUser_rolesInput
    connect?: user_appsWhereUniqueInput
  }

  export type rolesUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    upsert?: rolesUpsertWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUser_rolesInput, rolesUpdateWithoutUser_rolesInput>, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateOneWithoutUser_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    upsert?: usersUpsertWithoutUser_rolesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_rolesInput, usersUpdateWithoutUser_rolesInput>, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type user_appsUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<user_appsCreateWithoutUser_rolesInput, user_appsUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: user_appsCreateOrConnectWithoutUser_rolesInput
    upsert?: user_appsUpsertWithoutUser_rolesInput
    connect?: user_appsWhereUniqueInput
    update?: XOR<XOR<user_appsUpdateToOneWithWhereWithoutUser_rolesInput, user_appsUpdateWithoutUser_rolesInput>, user_appsUncheckedUpdateWithoutUser_rolesInput>
  }

  export type appsCreateNestedManyWithoutUsersInput = {
    create?: XOR<appsCreateWithoutUsersInput, appsUncheckedCreateWithoutUsersInput> | appsCreateWithoutUsersInput[] | appsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appsCreateOrConnectWithoutUsersInput | appsCreateOrConnectWithoutUsersInput[]
    createMany?: appsCreateManyUsersInputEnvelope
    connect?: appsWhereUniqueInput | appsWhereUniqueInput[]
  }

  export type filtursCreateNestedManyWithoutUsersInput = {
    create?: XOR<filtursCreateWithoutUsersInput, filtursUncheckedCreateWithoutUsersInput> | filtursCreateWithoutUsersInput[] | filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutUsersInput | filtursCreateOrConnectWithoutUsersInput[]
    createMany?: filtursCreateManyUsersInputEnvelope
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
  }

  export type rolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    createMany?: rolesCreateManyUsersInputEnvelope
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput> | user_appsCreateWithoutUsers_user_apps_user_idTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_user_idTousersInputEnvelope
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
  }

  export type user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput> | user_appsCreateWithoutUsers_user_apps_updatedByTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_updatedByTousersInputEnvelope
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
  }

  export type user_filtursCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_filtursCreateWithoutUsersInput, user_filtursUncheckedCreateWithoutUsersInput> | user_filtursCreateWithoutUsersInput[] | user_filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUsersInput | user_filtursCreateOrConnectWithoutUsersInput[]
    createMany?: user_filtursCreateManyUsersInputEnvelope
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
  }

  export type user_rolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type appsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<appsCreateWithoutUsersInput, appsUncheckedCreateWithoutUsersInput> | appsCreateWithoutUsersInput[] | appsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appsCreateOrConnectWithoutUsersInput | appsCreateOrConnectWithoutUsersInput[]
    createMany?: appsCreateManyUsersInputEnvelope
    connect?: appsWhereUniqueInput | appsWhereUniqueInput[]
  }

  export type filtursUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<filtursCreateWithoutUsersInput, filtursUncheckedCreateWithoutUsersInput> | filtursCreateWithoutUsersInput[] | filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutUsersInput | filtursCreateOrConnectWithoutUsersInput[]
    createMany?: filtursCreateManyUsersInputEnvelope
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
  }

  export type rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    createMany?: rolesCreateManyUsersInputEnvelope
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
  }

  export type user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput> | user_appsCreateWithoutUsers_user_apps_user_idTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_user_idTousersInputEnvelope
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
  }

  export type user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput> | user_appsCreateWithoutUsers_user_apps_updatedByTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_updatedByTousersInputEnvelope
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
  }

  export type user_filtursUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_filtursCreateWithoutUsersInput, user_filtursUncheckedCreateWithoutUsersInput> | user_filtursCreateWithoutUsersInput[] | user_filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUsersInput | user_filtursCreateOrConnectWithoutUsersInput[]
    createMany?: user_filtursCreateManyUsersInputEnvelope
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type appsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<appsCreateWithoutUsersInput, appsUncheckedCreateWithoutUsersInput> | appsCreateWithoutUsersInput[] | appsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appsCreateOrConnectWithoutUsersInput | appsCreateOrConnectWithoutUsersInput[]
    upsert?: appsUpsertWithWhereUniqueWithoutUsersInput | appsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: appsCreateManyUsersInputEnvelope
    set?: appsWhereUniqueInput | appsWhereUniqueInput[]
    disconnect?: appsWhereUniqueInput | appsWhereUniqueInput[]
    delete?: appsWhereUniqueInput | appsWhereUniqueInput[]
    connect?: appsWhereUniqueInput | appsWhereUniqueInput[]
    update?: appsUpdateWithWhereUniqueWithoutUsersInput | appsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: appsUpdateManyWithWhereWithoutUsersInput | appsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: appsScalarWhereInput | appsScalarWhereInput[]
  }

  export type filtursUpdateManyWithoutUsersNestedInput = {
    create?: XOR<filtursCreateWithoutUsersInput, filtursUncheckedCreateWithoutUsersInput> | filtursCreateWithoutUsersInput[] | filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutUsersInput | filtursCreateOrConnectWithoutUsersInput[]
    upsert?: filtursUpsertWithWhereUniqueWithoutUsersInput | filtursUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: filtursCreateManyUsersInputEnvelope
    set?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    disconnect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    delete?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    update?: filtursUpdateWithWhereUniqueWithoutUsersInput | filtursUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: filtursUpdateManyWithWhereWithoutUsersInput | filtursUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: filtursScalarWhereInput | filtursScalarWhereInput[]
  }

  export type rolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutUsersInput | rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rolesCreateManyUsersInputEnvelope
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutUsersInput | rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutUsersInput | rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput> | user_appsCreateWithoutUsers_user_apps_user_idTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput[]
    upsert?: user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput | user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_user_idTousersInputEnvelope
    set?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    disconnect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    delete?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    update?: user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput | user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput[]
    updateMany?: user_appsUpdateManyWithWhereWithoutUsers_user_apps_user_idTousersInput | user_appsUpdateManyWithWhereWithoutUsers_user_apps_user_idTousersInput[]
    deleteMany?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
  }

  export type user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput> | user_appsCreateWithoutUsers_user_apps_updatedByTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput[]
    upsert?: user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput | user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_updatedByTousersInputEnvelope
    set?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    disconnect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    delete?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    update?: user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput | user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput[]
    updateMany?: user_appsUpdateManyWithWhereWithoutUsers_user_apps_updatedByTousersInput | user_appsUpdateManyWithWhereWithoutUsers_user_apps_updatedByTousersInput[]
    deleteMany?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
  }

  export type user_filtursUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_filtursCreateWithoutUsersInput, user_filtursUncheckedCreateWithoutUsersInput> | user_filtursCreateWithoutUsersInput[] | user_filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUsersInput | user_filtursCreateOrConnectWithoutUsersInput[]
    upsert?: user_filtursUpsertWithWhereUniqueWithoutUsersInput | user_filtursUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_filtursCreateManyUsersInputEnvelope
    set?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    disconnect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    delete?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    update?: user_filtursUpdateWithWhereUniqueWithoutUsersInput | user_filtursUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_filtursUpdateManyWithWhereWithoutUsersInput | user_filtursUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
  }

  export type user_rolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsersInput | user_rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsersInput | user_rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsersInput | user_rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type appsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<appsCreateWithoutUsersInput, appsUncheckedCreateWithoutUsersInput> | appsCreateWithoutUsersInput[] | appsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appsCreateOrConnectWithoutUsersInput | appsCreateOrConnectWithoutUsersInput[]
    upsert?: appsUpsertWithWhereUniqueWithoutUsersInput | appsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: appsCreateManyUsersInputEnvelope
    set?: appsWhereUniqueInput | appsWhereUniqueInput[]
    disconnect?: appsWhereUniqueInput | appsWhereUniqueInput[]
    delete?: appsWhereUniqueInput | appsWhereUniqueInput[]
    connect?: appsWhereUniqueInput | appsWhereUniqueInput[]
    update?: appsUpdateWithWhereUniqueWithoutUsersInput | appsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: appsUpdateManyWithWhereWithoutUsersInput | appsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: appsScalarWhereInput | appsScalarWhereInput[]
  }

  export type filtursUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<filtursCreateWithoutUsersInput, filtursUncheckedCreateWithoutUsersInput> | filtursCreateWithoutUsersInput[] | filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filtursCreateOrConnectWithoutUsersInput | filtursCreateOrConnectWithoutUsersInput[]
    upsert?: filtursUpsertWithWhereUniqueWithoutUsersInput | filtursUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: filtursCreateManyUsersInputEnvelope
    set?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    disconnect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    delete?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    connect?: filtursWhereUniqueInput | filtursWhereUniqueInput[]
    update?: filtursUpdateWithWhereUniqueWithoutUsersInput | filtursUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: filtursUpdateManyWithWhereWithoutUsersInput | filtursUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: filtursScalarWhereInput | filtursScalarWhereInput[]
  }

  export type rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput> | rolesCreateWithoutUsersInput[] | rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput | rolesCreateOrConnectWithoutUsersInput[]
    upsert?: rolesUpsertWithWhereUniqueWithoutUsersInput | rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rolesCreateManyUsersInputEnvelope
    set?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    disconnect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    delete?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    connect?: rolesWhereUniqueInput | rolesWhereUniqueInput[]
    update?: rolesUpdateWithWhereUniqueWithoutUsersInput | rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rolesUpdateManyWithWhereWithoutUsersInput | rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rolesScalarWhereInput | rolesScalarWhereInput[]
  }

  export type user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput> | user_appsCreateWithoutUsers_user_apps_user_idTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput[]
    upsert?: user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput | user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_user_idTousersInputEnvelope
    set?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    disconnect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    delete?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    update?: user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput | user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput[]
    updateMany?: user_appsUpdateManyWithWhereWithoutUsers_user_apps_user_idTousersInput | user_appsUpdateManyWithWhereWithoutUsers_user_apps_user_idTousersInput[]
    deleteMany?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
  }

  export type user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput = {
    create?: XOR<user_appsCreateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput> | user_appsCreateWithoutUsers_user_apps_updatedByTousersInput[] | user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput[]
    connectOrCreate?: user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput | user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput[]
    upsert?: user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput | user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput[]
    createMany?: user_appsCreateManyUsers_user_apps_updatedByTousersInputEnvelope
    set?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    disconnect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    delete?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    connect?: user_appsWhereUniqueInput | user_appsWhereUniqueInput[]
    update?: user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput | user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput[]
    updateMany?: user_appsUpdateManyWithWhereWithoutUsers_user_apps_updatedByTousersInput | user_appsUpdateManyWithWhereWithoutUsers_user_apps_updatedByTousersInput[]
    deleteMany?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
  }

  export type user_filtursUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_filtursCreateWithoutUsersInput, user_filtursUncheckedCreateWithoutUsersInput> | user_filtursCreateWithoutUsersInput[] | user_filtursUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filtursCreateOrConnectWithoutUsersInput | user_filtursCreateOrConnectWithoutUsersInput[]
    upsert?: user_filtursUpsertWithWhereUniqueWithoutUsersInput | user_filtursUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_filtursCreateManyUsersInputEnvelope
    set?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    disconnect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    delete?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    connect?: user_filtursWhereUniqueInput | user_filtursWhereUniqueInput[]
    update?: user_filtursUpdateWithWhereUniqueWithoutUsersInput | user_filtursUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_filtursUpdateManyWithWhereWithoutUsersInput | user_filtursUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput> | user_rolesCreateWithoutUsersInput[] | user_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput | user_rolesCreateOrConnectWithoutUsersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsersInput | user_rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_rolesCreateManyUsersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsersInput | user_rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsersInput | user_rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutAppsInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    filturs?: filtursCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAppsInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAppsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAppsInput, usersUncheckedCreateWithoutAppsInput>
  }

  export type filtursCreateWithoutAppsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutFiltursInput
    user_filturs?: user_filtursCreateNestedManyWithoutFiltursInput
  }

  export type filtursUncheckedCreateWithoutAppsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutFiltursInput
  }

  export type filtursCreateOrConnectWithoutAppsInput = {
    where: filtursWhereUniqueInput
    create: XOR<filtursCreateWithoutAppsInput, filtursUncheckedCreateWithoutAppsInput>
  }

  export type filtursCreateManyAppsInputEnvelope = {
    data: filtursCreateManyAppsInput | filtursCreateManyAppsInput[]
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutAppsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutRolesInput
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutAppsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutAppsInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutAppsInput, rolesUncheckedCreateWithoutAppsInput>
  }

  export type rolesCreateManyAppsInputEnvelope = {
    data: rolesCreateManyAppsInput | rolesCreateManyAppsInput[]
    skipDuplicates?: boolean
  }

  export type user_appsCreateWithoutAppsInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_user_apps_user_idTousers: usersCreateNestedOneWithoutUser_apps_user_apps_user_idTousersInput
    users_user_apps_updatedByTousers?: usersCreateNestedOneWithoutUser_apps_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUncheckedCreateWithoutAppsInput = {
    id: string
    user_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsCreateOrConnectWithoutAppsInput = {
    where: user_appsWhereUniqueInput
    create: XOR<user_appsCreateWithoutAppsInput, user_appsUncheckedCreateWithoutAppsInput>
  }

  export type user_appsCreateManyAppsInputEnvelope = {
    data: user_appsCreateManyAppsInput | user_appsCreateManyAppsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutAppsInput = {
    update: XOR<usersUpdateWithoutAppsInput, usersUncheckedUpdateWithoutAppsInput>
    create: XOR<usersCreateWithoutAppsInput, usersUncheckedCreateWithoutAppsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAppsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAppsInput, usersUncheckedUpdateWithoutAppsInput>
  }

  export type usersUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type filtursUpsertWithWhereUniqueWithoutAppsInput = {
    where: filtursWhereUniqueInput
    update: XOR<filtursUpdateWithoutAppsInput, filtursUncheckedUpdateWithoutAppsInput>
    create: XOR<filtursCreateWithoutAppsInput, filtursUncheckedCreateWithoutAppsInput>
  }

  export type filtursUpdateWithWhereUniqueWithoutAppsInput = {
    where: filtursWhereUniqueInput
    data: XOR<filtursUpdateWithoutAppsInput, filtursUncheckedUpdateWithoutAppsInput>
  }

  export type filtursUpdateManyWithWhereWithoutAppsInput = {
    where: filtursScalarWhereInput
    data: XOR<filtursUpdateManyMutationInput, filtursUncheckedUpdateManyWithoutAppsInput>
  }

  export type filtursScalarWhereInput = {
    AND?: filtursScalarWhereInput | filtursScalarWhereInput[]
    OR?: filtursScalarWhereInput[]
    NOT?: filtursScalarWhereInput | filtursScalarWhereInput[]
    id?: StringFilter<"filturs"> | string
    urut?: IntNullableFilter<"filturs"> | number | null
    nama?: StringFilter<"filturs"> | string
    img?: StringNullableFilter<"filturs"> | string | null
    keterangan?: StringNullableFilter<"filturs"> | string | null
    url?: StringNullableFilter<"filturs"> | string | null
    app_id?: StringFilter<"filturs"> | string
    updatedBy?: StringNullableFilter<"filturs"> | string | null
    created_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"filturs"> | Date | string | null
  }

  export type rolesUpsertWithWhereUniqueWithoutAppsInput = {
    where: rolesWhereUniqueInput
    update: XOR<rolesUpdateWithoutAppsInput, rolesUncheckedUpdateWithoutAppsInput>
    create: XOR<rolesCreateWithoutAppsInput, rolesUncheckedCreateWithoutAppsInput>
  }

  export type rolesUpdateWithWhereUniqueWithoutAppsInput = {
    where: rolesWhereUniqueInput
    data: XOR<rolesUpdateWithoutAppsInput, rolesUncheckedUpdateWithoutAppsInput>
  }

  export type rolesUpdateManyWithWhereWithoutAppsInput = {
    where: rolesScalarWhereInput
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyWithoutAppsInput>
  }

  export type rolesScalarWhereInput = {
    AND?: rolesScalarWhereInput | rolesScalarWhereInput[]
    OR?: rolesScalarWhereInput[]
    NOT?: rolesScalarWhereInput | rolesScalarWhereInput[]
    id?: StringFilter<"roles"> | string
    urut?: IntNullableFilter<"roles"> | number | null
    nama?: StringFilter<"roles"> | string
    img?: StringNullableFilter<"roles"> | string | null
    keterangan?: StringNullableFilter<"roles"> | string | null
    url?: StringNullableFilter<"roles"> | string | null
    app_id?: StringFilter<"roles"> | string
    updatedBy?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"roles"> | Date | string | null
  }

  export type user_appsUpsertWithWhereUniqueWithoutAppsInput = {
    where: user_appsWhereUniqueInput
    update: XOR<user_appsUpdateWithoutAppsInput, user_appsUncheckedUpdateWithoutAppsInput>
    create: XOR<user_appsCreateWithoutAppsInput, user_appsUncheckedCreateWithoutAppsInput>
  }

  export type user_appsUpdateWithWhereUniqueWithoutAppsInput = {
    where: user_appsWhereUniqueInput
    data: XOR<user_appsUpdateWithoutAppsInput, user_appsUncheckedUpdateWithoutAppsInput>
  }

  export type user_appsUpdateManyWithWhereWithoutAppsInput = {
    where: user_appsScalarWhereInput
    data: XOR<user_appsUpdateManyMutationInput, user_appsUncheckedUpdateManyWithoutAppsInput>
  }

  export type user_appsScalarWhereInput = {
    AND?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
    OR?: user_appsScalarWhereInput[]
    NOT?: user_appsScalarWhereInput | user_appsScalarWhereInput[]
    id?: StringFilter<"user_apps"> | string
    user_id?: StringFilter<"user_apps"> | string
    app_id?: StringFilter<"user_apps"> | string
    updatedBy?: StringNullableFilter<"user_apps"> | string | null
    created_at?: DateTimeNullableFilter<"user_apps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_apps"> | Date | string | null
  }

  export type appsCreateWithoutFiltursInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAppsInput
    roles?: rolesCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsCreateNestedManyWithoutAppsInput
  }

  export type appsUncheckedCreateWithoutFiltursInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    roles?: rolesUncheckedCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsUncheckedCreateNestedManyWithoutAppsInput
  }

  export type appsCreateOrConnectWithoutFiltursInput = {
    where: appsWhereUniqueInput
    create: XOR<appsCreateWithoutFiltursInput, appsUncheckedCreateWithoutFiltursInput>
  }

  export type usersCreateWithoutFiltursInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFiltursInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFiltursInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFiltursInput, usersUncheckedCreateWithoutFiltursInput>
  }

  export type user_filtursCreateWithoutFiltursInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_filtursInput
    user_apps: user_appsCreateNestedOneWithoutUser_filtursInput
  }

  export type user_filtursUncheckedCreateWithoutFiltursInput = {
    id: string
    urut?: number | null
    user_app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursCreateOrConnectWithoutFiltursInput = {
    where: user_filtursWhereUniqueInput
    create: XOR<user_filtursCreateWithoutFiltursInput, user_filtursUncheckedCreateWithoutFiltursInput>
  }

  export type user_filtursCreateManyFiltursInputEnvelope = {
    data: user_filtursCreateManyFiltursInput | user_filtursCreateManyFiltursInput[]
    skipDuplicates?: boolean
  }

  export type appsUpsertWithoutFiltursInput = {
    update: XOR<appsUpdateWithoutFiltursInput, appsUncheckedUpdateWithoutFiltursInput>
    create: XOR<appsCreateWithoutFiltursInput, appsUncheckedCreateWithoutFiltursInput>
    where?: appsWhereInput
  }

  export type appsUpdateToOneWithWhereWithoutFiltursInput = {
    where?: appsWhereInput
    data: XOR<appsUpdateWithoutFiltursInput, appsUncheckedUpdateWithoutFiltursInput>
  }

  export type appsUpdateWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAppsNestedInput
    roles?: rolesUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUncheckedUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type usersUpsertWithoutFiltursInput = {
    update: XOR<usersUpdateWithoutFiltursInput, usersUncheckedUpdateWithoutFiltursInput>
    create: XOR<usersCreateWithoutFiltursInput, usersUncheckedCreateWithoutFiltursInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFiltursInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFiltursInput, usersUncheckedUpdateWithoutFiltursInput>
  }

  export type usersUpdateWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_filtursUpsertWithWhereUniqueWithoutFiltursInput = {
    where: user_filtursWhereUniqueInput
    update: XOR<user_filtursUpdateWithoutFiltursInput, user_filtursUncheckedUpdateWithoutFiltursInput>
    create: XOR<user_filtursCreateWithoutFiltursInput, user_filtursUncheckedCreateWithoutFiltursInput>
  }

  export type user_filtursUpdateWithWhereUniqueWithoutFiltursInput = {
    where: user_filtursWhereUniqueInput
    data: XOR<user_filtursUpdateWithoutFiltursInput, user_filtursUncheckedUpdateWithoutFiltursInput>
  }

  export type user_filtursUpdateManyWithWhereWithoutFiltursInput = {
    where: user_filtursScalarWhereInput
    data: XOR<user_filtursUpdateManyMutationInput, user_filtursUncheckedUpdateManyWithoutFiltursInput>
  }

  export type user_filtursScalarWhereInput = {
    AND?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
    OR?: user_filtursScalarWhereInput[]
    NOT?: user_filtursScalarWhereInput | user_filtursScalarWhereInput[]
    id?: StringFilter<"user_filturs"> | string
    urut?: IntNullableFilter<"user_filturs"> | number | null
    user_app_id?: StringFilter<"user_filturs"> | string
    filtur_id?: StringFilter<"user_filturs"> | string
    updatedBy?: StringNullableFilter<"user_filturs"> | string | null
    created_at?: DateTimeNullableFilter<"user_filturs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_filturs"> | Date | string | null
  }

  export type appsCreateWithoutRolesInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAppsInput
    filturs?: filtursCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsCreateNestedManyWithoutAppsInput
  }

  export type appsUncheckedCreateWithoutRolesInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    filturs?: filtursUncheckedCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsUncheckedCreateNestedManyWithoutAppsInput
  }

  export type appsCreateOrConnectWithoutRolesInput = {
    where: appsWhereUniqueInput
    create: XOR<appsCreateWithoutRolesInput, appsUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateWithoutRolesInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    filturs?: filtursCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesCreateWithoutRolesInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_rolesInput
    user_apps: user_appsCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutRolesInput = {
    id: string
    urut?: number | null
    user_app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesCreateOrConnectWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesCreateManyRolesInputEnvelope = {
    data: user_rolesCreateManyRolesInput | user_rolesCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type appsUpsertWithoutRolesInput = {
    update: XOR<appsUpdateWithoutRolesInput, appsUncheckedUpdateWithoutRolesInput>
    create: XOR<appsCreateWithoutRolesInput, appsUncheckedCreateWithoutRolesInput>
    where?: appsWhereInput
  }

  export type appsUpdateToOneWithWhereWithoutRolesInput = {
    where?: appsWhereInput
    data: XOR<appsUpdateWithoutRolesInput, appsUncheckedUpdateWithoutRolesInput>
  }

  export type appsUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAppsNestedInput
    filturs?: filtursUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUncheckedUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type usersUpsertWithoutRolesInput = {
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutRolesInput>
  }

  export type user_rolesScalarWhereInput = {
    AND?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    OR?: user_rolesScalarWhereInput[]
    NOT?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    id?: StringFilter<"user_roles"> | string
    urut?: IntNullableFilter<"user_roles"> | number | null
    user_app_id?: StringFilter<"user_roles"> | string
    role_id?: StringFilter<"user_roles"> | string
    updatedBy?: StringNullableFilter<"user_roles"> | string | null
    created_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
  }

  export type usersCreateWithoutUser_apps_user_apps_user_idTousersInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    filturs?: filtursCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_apps_user_apps_user_idTousersInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_apps_user_apps_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_apps_user_apps_user_idTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_user_idTousersInput>
  }

  export type appsCreateWithoutOther_user_appsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAppsInput
    filturs?: filtursCreateNestedManyWithoutAppsInput
    roles?: rolesCreateNestedManyWithoutAppsInput
  }

  export type appsUncheckedCreateWithoutOther_user_appsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    filturs?: filtursUncheckedCreateNestedManyWithoutAppsInput
    roles?: rolesUncheckedCreateNestedManyWithoutAppsInput
  }

  export type appsCreateOrConnectWithoutOther_user_appsInput = {
    where: appsWhereUniqueInput
    create: XOR<appsCreateWithoutOther_user_appsInput, appsUncheckedCreateWithoutOther_user_appsInput>
  }

  export type usersCreateWithoutUser_apps_user_apps_updatedByTousersInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    filturs?: filtursCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_apps_user_apps_updatedByTousersInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_apps_user_apps_updatedByTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_apps_user_apps_updatedByTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_updatedByTousersInput>
  }

  export type user_filtursCreateWithoutUser_appsInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    filturs: filtursCreateNestedOneWithoutUser_filtursInput
    users?: usersCreateNestedOneWithoutUser_filtursInput
  }

  export type user_filtursUncheckedCreateWithoutUser_appsInput = {
    id: string
    urut?: number | null
    filtur_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursCreateOrConnectWithoutUser_appsInput = {
    where: user_filtursWhereUniqueInput
    create: XOR<user_filtursCreateWithoutUser_appsInput, user_filtursUncheckedCreateWithoutUser_appsInput>
  }

  export type user_filtursCreateManyUser_appsInputEnvelope = {
    data: user_filtursCreateManyUser_appsInput | user_filtursCreateManyUser_appsInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUser_appsInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users?: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutUser_appsInput = {
    id: string
    urut?: number | null
    role_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesCreateOrConnectWithoutUser_appsInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUser_appsInput, user_rolesUncheckedCreateWithoutUser_appsInput>
  }

  export type user_rolesCreateManyUser_appsInputEnvelope = {
    data: user_rolesCreateManyUser_appsInput | user_rolesCreateManyUser_appsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutUser_apps_user_apps_user_idTousersInput = {
    update: XOR<usersUpdateWithoutUser_apps_user_apps_user_idTousersInput, usersUncheckedUpdateWithoutUser_apps_user_apps_user_idTousersInput>
    create: XOR<usersCreateWithoutUser_apps_user_apps_user_idTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_apps_user_apps_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_apps_user_apps_user_idTousersInput, usersUncheckedUpdateWithoutUser_apps_user_apps_user_idTousersInput>
  }

  export type usersUpdateWithoutUser_apps_user_apps_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_apps_user_apps_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type appsUpsertWithoutOther_user_appsInput = {
    update: XOR<appsUpdateWithoutOther_user_appsInput, appsUncheckedUpdateWithoutOther_user_appsInput>
    create: XOR<appsCreateWithoutOther_user_appsInput, appsUncheckedCreateWithoutOther_user_appsInput>
    where?: appsWhereInput
  }

  export type appsUpdateToOneWithWhereWithoutOther_user_appsInput = {
    where?: appsWhereInput
    data: XOR<appsUpdateWithoutOther_user_appsInput, appsUncheckedUpdateWithoutOther_user_appsInput>
  }

  export type appsUpdateWithoutOther_user_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAppsNestedInput
    filturs?: filtursUpdateManyWithoutAppsNestedInput
    roles?: rolesUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateWithoutOther_user_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUncheckedUpdateManyWithoutAppsNestedInput
    roles?: rolesUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type usersUpsertWithoutUser_apps_user_apps_updatedByTousersInput = {
    update: XOR<usersUpdateWithoutUser_apps_user_apps_updatedByTousersInput, usersUncheckedUpdateWithoutUser_apps_user_apps_updatedByTousersInput>
    create: XOR<usersCreateWithoutUser_apps_user_apps_updatedByTousersInput, usersUncheckedCreateWithoutUser_apps_user_apps_updatedByTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_apps_user_apps_updatedByTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_apps_user_apps_updatedByTousersInput, usersUncheckedUpdateWithoutUser_apps_user_apps_updatedByTousersInput>
  }

  export type usersUpdateWithoutUser_apps_user_apps_updatedByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_apps_user_apps_updatedByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_filtursUpsertWithWhereUniqueWithoutUser_appsInput = {
    where: user_filtursWhereUniqueInput
    update: XOR<user_filtursUpdateWithoutUser_appsInput, user_filtursUncheckedUpdateWithoutUser_appsInput>
    create: XOR<user_filtursCreateWithoutUser_appsInput, user_filtursUncheckedCreateWithoutUser_appsInput>
  }

  export type user_filtursUpdateWithWhereUniqueWithoutUser_appsInput = {
    where: user_filtursWhereUniqueInput
    data: XOR<user_filtursUpdateWithoutUser_appsInput, user_filtursUncheckedUpdateWithoutUser_appsInput>
  }

  export type user_filtursUpdateManyWithWhereWithoutUser_appsInput = {
    where: user_filtursScalarWhereInput
    data: XOR<user_filtursUpdateManyMutationInput, user_filtursUncheckedUpdateManyWithoutUser_appsInput>
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUser_appsInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUser_appsInput, user_rolesUncheckedUpdateWithoutUser_appsInput>
    create: XOR<user_rolesCreateWithoutUser_appsInput, user_rolesUncheckedCreateWithoutUser_appsInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUser_appsInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUser_appsInput, user_rolesUncheckedUpdateWithoutUser_appsInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUser_appsInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUser_appsInput>
  }

  export type filtursCreateWithoutUser_filtursInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    apps: appsCreateNestedOneWithoutFiltursInput
    users?: usersCreateNestedOneWithoutFiltursInput
  }

  export type filtursUncheckedCreateWithoutUser_filtursInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type filtursCreateOrConnectWithoutUser_filtursInput = {
    where: filtursWhereUniqueInput
    create: XOR<filtursCreateWithoutUser_filtursInput, filtursUncheckedCreateWithoutUser_filtursInput>
  }

  export type usersCreateWithoutUser_filtursInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    filturs?: filtursCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_filtursInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_filtursInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_filtursInput, usersUncheckedCreateWithoutUser_filtursInput>
  }

  export type user_appsCreateWithoutUser_filtursInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_user_apps_user_idTousers: usersCreateNestedOneWithoutUser_apps_user_apps_user_idTousersInput
    apps: appsCreateNestedOneWithoutOther_user_appsInput
    users_user_apps_updatedByTousers?: usersCreateNestedOneWithoutUser_apps_user_apps_updatedByTousersInput
    user_roles?: user_rolesCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUncheckedCreateWithoutUser_filtursInput = {
    id: string
    user_id: string
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsCreateOrConnectWithoutUser_filtursInput = {
    where: user_appsWhereUniqueInput
    create: XOR<user_appsCreateWithoutUser_filtursInput, user_appsUncheckedCreateWithoutUser_filtursInput>
  }

  export type filtursUpsertWithoutUser_filtursInput = {
    update: XOR<filtursUpdateWithoutUser_filtursInput, filtursUncheckedUpdateWithoutUser_filtursInput>
    create: XOR<filtursCreateWithoutUser_filtursInput, filtursUncheckedCreateWithoutUser_filtursInput>
    where?: filtursWhereInput
  }

  export type filtursUpdateToOneWithWhereWithoutUser_filtursInput = {
    where?: filtursWhereInput
    data: XOR<filtursUpdateWithoutUser_filtursInput, filtursUncheckedUpdateWithoutUser_filtursInput>
  }

  export type filtursUpdateWithoutUser_filtursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutFiltursNestedInput
    users?: usersUpdateOneWithoutFiltursNestedInput
  }

  export type filtursUncheckedUpdateWithoutUser_filtursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutUser_filtursInput = {
    update: XOR<usersUpdateWithoutUser_filtursInput, usersUncheckedUpdateWithoutUser_filtursInput>
    create: XOR<usersCreateWithoutUser_filtursInput, usersUncheckedCreateWithoutUser_filtursInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_filtursInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_filtursInput, usersUncheckedUpdateWithoutUser_filtursInput>
  }

  export type usersUpdateWithoutUser_filtursInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_filtursInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_appsUpsertWithoutUser_filtursInput = {
    update: XOR<user_appsUpdateWithoutUser_filtursInput, user_appsUncheckedUpdateWithoutUser_filtursInput>
    create: XOR<user_appsCreateWithoutUser_filtursInput, user_appsUncheckedCreateWithoutUser_filtursInput>
    where?: user_appsWhereInput
  }

  export type user_appsUpdateToOneWithWhereWithoutUser_filtursInput = {
    where?: user_appsWhereInput
    data: XOR<user_appsUpdateWithoutUser_filtursInput, user_appsUncheckedUpdateWithoutUser_filtursInput>
  }

  export type user_appsUpdateWithoutUser_filtursInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_user_apps_user_idTousers?: usersUpdateOneRequiredWithoutUser_apps_user_apps_user_idTousersNestedInput
    apps?: appsUpdateOneRequiredWithoutOther_user_appsNestedInput
    users_user_apps_updatedByTousers?: usersUpdateOneWithoutUser_apps_user_apps_updatedByTousersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateWithoutUser_filtursInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_roles?: user_rolesUncheckedUpdateManyWithoutUser_appsNestedInput
  }

  export type rolesCreateWithoutUser_rolesInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    apps: appsCreateNestedOneWithoutRolesInput
    users?: usersCreateNestedOneWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutUser_rolesInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type rolesCreateOrConnectWithoutUser_rolesInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersCreateWithoutUser_rolesInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsCreateNestedManyWithoutUsersInput
    filturs?: filtursCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_rolesInput = {
    id: string
    google_id?: string | null
    avatar?: string | null
    nama: string
    username: string
    email?: string | null
    phone?: string | null
    email_verified_at?: Date | string | null
    password: string
    isActive?: boolean
    code?: string | null
    codeExpiredAt?: Date | string | null
    codeResendAt?: Date | string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps?: appsUncheckedCreateNestedManyWithoutUsersInput
    filturs?: filtursUncheckedCreateNestedManyWithoutUsersInput
    roles?: rolesUncheckedCreateNestedManyWithoutUsersInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_user_idTousersInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedCreateNestedManyWithoutUsers_user_apps_updatedByTousersInput
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type user_appsCreateWithoutUser_rolesInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_user_apps_user_idTousers: usersCreateNestedOneWithoutUser_apps_user_apps_user_idTousersInput
    apps: appsCreateNestedOneWithoutOther_user_appsInput
    users_user_apps_updatedByTousers?: usersCreateNestedOneWithoutUser_apps_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUncheckedCreateWithoutUser_rolesInput = {
    id: string
    user_id: string
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsCreateOrConnectWithoutUser_rolesInput = {
    where: user_appsWhereUniqueInput
    create: XOR<user_appsCreateWithoutUser_rolesInput, user_appsUncheckedCreateWithoutUser_rolesInput>
  }

  export type rolesUpsertWithoutUser_rolesInput = {
    update: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type rolesUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutRolesNestedInput
    users?: usersUpdateOneWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutUser_rolesInput = {
    update: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateManyWithoutUsersNestedInput
    filturs?: filtursUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeResendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUncheckedUpdateManyWithoutUsersNestedInput
    filturs?: filtursUncheckedUpdateManyWithoutUsersNestedInput
    roles?: rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_apps_user_apps_user_idTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersNestedInput
    user_apps_user_apps_updatedByTousers?: user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_appsUpsertWithoutUser_rolesInput = {
    update: XOR<user_appsUpdateWithoutUser_rolesInput, user_appsUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<user_appsCreateWithoutUser_rolesInput, user_appsUncheckedCreateWithoutUser_rolesInput>
    where?: user_appsWhereInput
  }

  export type user_appsUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: user_appsWhereInput
    data: XOR<user_appsUpdateWithoutUser_rolesInput, user_appsUncheckedUpdateWithoutUser_rolesInput>
  }

  export type user_appsUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_user_apps_user_idTousers?: usersUpdateOneRequiredWithoutUser_apps_user_apps_user_idTousersNestedInput
    apps?: appsUpdateOneRequiredWithoutOther_user_appsNestedInput
    users_user_apps_updatedByTousers?: usersUpdateOneWithoutUser_apps_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUser_appsNestedInput
  }

  export type appsCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    filturs?: filtursCreateNestedManyWithoutAppsInput
    roles?: rolesCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsCreateNestedManyWithoutAppsInput
  }

  export type appsUncheckedCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    filturs?: filtursUncheckedCreateNestedManyWithoutAppsInput
    roles?: rolesUncheckedCreateNestedManyWithoutAppsInput
    other_user_apps?: user_appsUncheckedCreateNestedManyWithoutAppsInput
  }

  export type appsCreateOrConnectWithoutUsersInput = {
    where: appsWhereUniqueInput
    create: XOR<appsCreateWithoutUsersInput, appsUncheckedCreateWithoutUsersInput>
  }

  export type appsCreateManyUsersInputEnvelope = {
    data: appsCreateManyUsersInput | appsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type filtursCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    apps: appsCreateNestedOneWithoutFiltursInput
    user_filturs?: user_filtursCreateNestedManyWithoutFiltursInput
  }

  export type filtursUncheckedCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutFiltursInput
  }

  export type filtursCreateOrConnectWithoutUsersInput = {
    where: filtursWhereUniqueInput
    create: XOR<filtursCreateWithoutUsersInput, filtursUncheckedCreateWithoutUsersInput>
  }

  export type filtursCreateManyUsersInputEnvelope = {
    data: filtursCreateManyUsersInput | filtursCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    apps: appsCreateNestedOneWithoutRolesInput
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type rolesCreateManyUsersInputEnvelope = {
    data: rolesCreateManyUsersInput | rolesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_appsCreateWithoutUsers_user_apps_user_idTousersInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    apps: appsCreateNestedOneWithoutOther_user_appsInput
    users_user_apps_updatedByTousers?: usersCreateNestedOneWithoutUser_apps_user_apps_updatedByTousersInput
    user_filturs?: user_filtursCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput = {
    id: string
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsCreateOrConnectWithoutUsers_user_apps_user_idTousersInput = {
    where: user_appsWhereUniqueInput
    create: XOR<user_appsCreateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput>
  }

  export type user_appsCreateManyUsers_user_apps_user_idTousersInputEnvelope = {
    data: user_appsCreateManyUsers_user_apps_user_idTousersInput | user_appsCreateManyUsers_user_apps_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type user_appsCreateWithoutUsers_user_apps_updatedByTousersInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_user_apps_user_idTousers: usersCreateNestedOneWithoutUser_apps_user_apps_user_idTousersInput
    apps: appsCreateNestedOneWithoutOther_user_appsInput
    user_filturs?: user_filtursCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput = {
    id: string
    user_id: string
    app_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_filturs?: user_filtursUncheckedCreateNestedManyWithoutUser_appsInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUser_appsInput
  }

  export type user_appsCreateOrConnectWithoutUsers_user_apps_updatedByTousersInput = {
    where: user_appsWhereUniqueInput
    create: XOR<user_appsCreateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput>
  }

  export type user_appsCreateManyUsers_user_apps_updatedByTousersInputEnvelope = {
    data: user_appsCreateManyUsers_user_apps_updatedByTousersInput | user_appsCreateManyUsers_user_apps_updatedByTousersInput[]
    skipDuplicates?: boolean
  }

  export type user_filtursCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    filturs: filtursCreateNestedOneWithoutUser_filtursInput
    user_apps: user_appsCreateNestedOneWithoutUser_filtursInput
  }

  export type user_filtursUncheckedCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    user_app_id: string
    filtur_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursCreateOrConnectWithoutUsersInput = {
    where: user_filtursWhereUniqueInput
    create: XOR<user_filtursCreateWithoutUsersInput, user_filtursUncheckedCreateWithoutUsersInput>
  }

  export type user_filtursCreateManyUsersInputEnvelope = {
    data: user_filtursCreateManyUsersInput | user_filtursCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    user_apps: user_appsCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutUsersInput = {
    id: string
    urut?: number | null
    user_app_id: string
    role_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesCreateOrConnectWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_rolesCreateManyUsersInputEnvelope = {
    data: user_rolesCreateManyUsersInput | user_rolesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type appsUpsertWithWhereUniqueWithoutUsersInput = {
    where: appsWhereUniqueInput
    update: XOR<appsUpdateWithoutUsersInput, appsUncheckedUpdateWithoutUsersInput>
    create: XOR<appsCreateWithoutUsersInput, appsUncheckedCreateWithoutUsersInput>
  }

  export type appsUpdateWithWhereUniqueWithoutUsersInput = {
    where: appsWhereUniqueInput
    data: XOR<appsUpdateWithoutUsersInput, appsUncheckedUpdateWithoutUsersInput>
  }

  export type appsUpdateManyWithWhereWithoutUsersInput = {
    where: appsScalarWhereInput
    data: XOR<appsUpdateManyMutationInput, appsUncheckedUpdateManyWithoutUsersInput>
  }

  export type appsScalarWhereInput = {
    AND?: appsScalarWhereInput | appsScalarWhereInput[]
    OR?: appsScalarWhereInput[]
    NOT?: appsScalarWhereInput | appsScalarWhereInput[]
    id?: StringFilter<"apps"> | string
    urut?: IntNullableFilter<"apps"> | number | null
    nama?: StringFilter<"apps"> | string
    img?: StringNullableFilter<"apps"> | string | null
    keterangan?: StringNullableFilter<"apps"> | string | null
    url?: StringNullableFilter<"apps"> | string | null
    isLocal?: BoolFilter<"apps"> | boolean
    isAkun?: BoolFilter<"apps"> | boolean
    isMaintenace?: BoolFilter<"apps"> | boolean
    isActive?: BoolFilter<"apps"> | boolean
    storage_folder?: StringNullableFilter<"apps"> | string | null
    updatedBy?: StringNullableFilter<"apps"> | string | null
    created_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"apps"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"apps"> | Date | string | null
  }

  export type filtursUpsertWithWhereUniqueWithoutUsersInput = {
    where: filtursWhereUniqueInput
    update: XOR<filtursUpdateWithoutUsersInput, filtursUncheckedUpdateWithoutUsersInput>
    create: XOR<filtursCreateWithoutUsersInput, filtursUncheckedCreateWithoutUsersInput>
  }

  export type filtursUpdateWithWhereUniqueWithoutUsersInput = {
    where: filtursWhereUniqueInput
    data: XOR<filtursUpdateWithoutUsersInput, filtursUncheckedUpdateWithoutUsersInput>
  }

  export type filtursUpdateManyWithWhereWithoutUsersInput = {
    where: filtursScalarWhereInput
    data: XOR<filtursUpdateManyMutationInput, filtursUncheckedUpdateManyWithoutUsersInput>
  }

  export type rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: rolesWhereUniqueInput
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: rolesWhereUniqueInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateManyWithWhereWithoutUsersInput = {
    where: rolesScalarWhereInput
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput = {
    where: user_appsWhereUniqueInput
    update: XOR<user_appsUpdateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedUpdateWithoutUsers_user_apps_user_idTousersInput>
    create: XOR<user_appsCreateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_user_idTousersInput>
  }

  export type user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_user_idTousersInput = {
    where: user_appsWhereUniqueInput
    data: XOR<user_appsUpdateWithoutUsers_user_apps_user_idTousersInput, user_appsUncheckedUpdateWithoutUsers_user_apps_user_idTousersInput>
  }

  export type user_appsUpdateManyWithWhereWithoutUsers_user_apps_user_idTousersInput = {
    where: user_appsScalarWhereInput
    data: XOR<user_appsUpdateManyMutationInput, user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersInput>
  }

  export type user_appsUpsertWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput = {
    where: user_appsWhereUniqueInput
    update: XOR<user_appsUpdateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedUpdateWithoutUsers_user_apps_updatedByTousersInput>
    create: XOR<user_appsCreateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedCreateWithoutUsers_user_apps_updatedByTousersInput>
  }

  export type user_appsUpdateWithWhereUniqueWithoutUsers_user_apps_updatedByTousersInput = {
    where: user_appsWhereUniqueInput
    data: XOR<user_appsUpdateWithoutUsers_user_apps_updatedByTousersInput, user_appsUncheckedUpdateWithoutUsers_user_apps_updatedByTousersInput>
  }

  export type user_appsUpdateManyWithWhereWithoutUsers_user_apps_updatedByTousersInput = {
    where: user_appsScalarWhereInput
    data: XOR<user_appsUpdateManyMutationInput, user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersInput>
  }

  export type user_filtursUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_filtursWhereUniqueInput
    update: XOR<user_filtursUpdateWithoutUsersInput, user_filtursUncheckedUpdateWithoutUsersInput>
    create: XOR<user_filtursCreateWithoutUsersInput, user_filtursUncheckedCreateWithoutUsersInput>
  }

  export type user_filtursUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_filtursWhereUniqueInput
    data: XOR<user_filtursUpdateWithoutUsersInput, user_filtursUncheckedUpdateWithoutUsersInput>
  }

  export type user_filtursUpdateManyWithWhereWithoutUsersInput = {
    where: user_filtursScalarWhereInput
    data: XOR<user_filtursUpdateManyMutationInput, user_filtursUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUsersInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUsersInput>
  }

  export type filtursCreateManyAppsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type rolesCreateManyAppsInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type user_appsCreateManyAppsInput = {
    id: string
    user_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type filtursUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutFiltursNestedInput
    user_filturs?: user_filtursUpdateManyWithoutFiltursNestedInput
  }

  export type filtursUncheckedUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutFiltursNestedInput
  }

  export type filtursUncheckedUpdateManyWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutRolesNestedInput
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateManyWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_appsUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_user_apps_user_idTousers?: usersUpdateOneRequiredWithoutUser_apps_user_apps_user_idTousersNestedInput
    users_user_apps_updatedByTousers?: usersUpdateOneWithoutUser_apps_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateManyWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursCreateManyFiltursInput = {
    id: string
    urut?: number | null
    user_app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursUpdateWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_filtursNestedInput
    user_apps?: user_appsUpdateOneRequiredWithoutUser_filtursNestedInput
  }

  export type user_filtursUncheckedUpdateWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursUncheckedUpdateManyWithoutFiltursInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesCreateManyRolesInput = {
    id: string
    urut?: number | null
    user_app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_rolesNestedInput
    user_apps?: user_appsUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursCreateManyUser_appsInput = {
    id: string
    urut?: number | null
    filtur_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesCreateManyUser_appsInput = {
    id: string
    urut?: number | null
    role_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursUpdateWithoutUser_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUpdateOneRequiredWithoutUser_filtursNestedInput
    users?: usersUpdateOneWithoutUser_filtursNestedInput
  }

  export type user_filtursUncheckedUpdateWithoutUser_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    filtur_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursUncheckedUpdateManyWithoutUser_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    filtur_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesUpdateWithoutUser_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users?: usersUpdateOneWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUser_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesUncheckedUpdateManyWithoutUser_appsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appsCreateManyUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    isLocal?: boolean
    isAkun?: boolean
    isMaintenace?: boolean
    isActive?: boolean
    storage_folder?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type filtursCreateManyUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type rolesCreateManyUsersInput = {
    id: string
    urut?: number | null
    nama: string
    img?: string | null
    keterangan?: string | null
    url?: string | null
    app_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type user_appsCreateManyUsers_user_apps_user_idTousersInput = {
    id: string
    app_id: string
    updatedBy?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_appsCreateManyUsers_user_apps_updatedByTousersInput = {
    id: string
    user_id: string
    app_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filtursCreateManyUsersInput = {
    id: string
    urut?: number | null
    user_app_id: string
    filtur_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_rolesCreateManyUsersInput = {
    id: string
    urut?: number | null
    user_app_id: string
    role_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type appsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUpdateManyWithoutAppsNestedInput
    roles?: rolesUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUncheckedUpdateManyWithoutAppsNestedInput
    roles?: rolesUncheckedUpdateManyWithoutAppsNestedInput
    other_user_apps?: user_appsUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    isAkun?: BoolFieldUpdateOperationsInput | boolean
    isMaintenace?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    storage_folder?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filtursUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutFiltursNestedInput
    user_filturs?: user_filtursUpdateManyWithoutFiltursNestedInput
  }

  export type filtursUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutFiltursNestedInput
  }

  export type filtursUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutRolesNestedInput
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    app_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_appsUpdateWithoutUsers_user_apps_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apps?: appsUpdateOneRequiredWithoutOther_user_appsNestedInput
    users_user_apps_updatedByTousers?: usersUpdateOneWithoutUser_apps_user_apps_updatedByTousersNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateWithoutUsers_user_apps_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateManyWithoutUsers_user_apps_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_appsUpdateWithoutUsers_user_apps_updatedByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_user_apps_user_idTousers?: usersUpdateOneRequiredWithoutUser_apps_user_apps_user_idTousersNestedInput
    apps?: appsUpdateOneRequiredWithoutOther_user_appsNestedInput
    user_filturs?: user_filtursUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateWithoutUsers_user_apps_updatedByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_filturs?: user_filtursUncheckedUpdateManyWithoutUser_appsNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUser_appsNestedInput
  }

  export type user_appsUncheckedUpdateManyWithoutUsers_user_apps_updatedByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filturs?: filtursUpdateOneRequiredWithoutUser_filtursNestedInput
    user_apps?: user_appsUpdateOneRequiredWithoutUser_filtursNestedInput
  }

  export type user_filtursUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    filtur_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filtursUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    filtur_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    user_apps?: user_appsUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_rolesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    urut?: NullableIntFieldUpdateOperationsInput | number | null
    user_app_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AppsCountOutputTypeDefaultArgs instead
     */
    export type AppsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FiltursCountOutputTypeDefaultArgs instead
     */
    export type FiltursCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FiltursCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_appsCountOutputTypeDefaultArgs instead
     */
    export type User_appsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_appsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use appsDefaultArgs instead
     */
    export type appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = appsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use filtursDefaultArgs instead
     */
    export type filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = filtursDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_appsDefaultArgs instead
     */
    export type user_appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_appsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_filtursDefaultArgs instead
     */
    export type user_filtursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_filtursDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_rolesDefaultArgs instead
     */
    export type user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}