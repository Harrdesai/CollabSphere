
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
 * Model ImportCSV
 * 
 */
export type ImportCSV = $Result.DefaultSelection<Prisma.$ImportCSVPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Teams
 * 
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model UserRoleInTeam
 * 
 */
export type UserRoleInTeam = $Result.DefaultSelection<Prisma.$UserRoleInTeamPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TeamsEditLog
 * 
 */
export type TeamsEditLog = $Result.DefaultSelection<Prisma.$TeamsEditLogPayload>
/**
 * Model ActiveInvitationOrRequest
 * 
 */
export type ActiveInvitationOrRequest = $Result.DefaultSelection<Prisma.$ActiveInvitationOrRequestPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model NoticeHistory
 * 
 */
export type NoticeHistory = $Result.DefaultSelection<Prisma.$NoticeHistoryPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Designation: {
  FULLSTACK_DEVELOPER: 'FULLSTACK_DEVELOPER',
  FRONTEND_DEVELOPER: 'FRONTEND_DEVELOPER',
  BACKEND_DEVELOPER: 'BACKEND_DEVELOPER',
  UI_DESIGNER: 'UI_DESIGNER',
  UX_DESIGNER: 'UX_DESIGNER',
  PRODUCT_DESIGNER: 'PRODUCT_DESIGNER',
  DATA_SCIENTIST: 'DATA_SCIENTIST',
  DATA_ANALYST: 'DATA_ANALYST',
  DATA_ENGINEER: 'DATA_ENGINEER',
  DATABASE_DESIGNER: 'DATABASE_DESIGNER',
  TEAM_LEADER: 'TEAM_LEADER'
};

export type Designation = (typeof Designation)[keyof typeof Designation]


export const Action: {
  INVITATION_SENT: 'INVITATION_SENT',
  INVITATION_REVOKED: 'INVITATION_REVOKED',
  INVITATION_EXPIRED: 'INVITATION_EXPIRED',
  INVITATION_REJECTED: 'INVITATION_REJECTED',
  INVITATION_ACCEPTED: 'INVITATION_ACCEPTED',
  ROLE_ASIGNED: 'ROLE_ASIGNED',
  ROLE_REMOVED: 'ROLE_REMOVED',
  TEAM_CREATED: 'TEAM_CREATED',
  TEAM_DELETED: 'TEAM_DELETED',
  MEMBER_REMOVED: 'MEMBER_REMOVED',
  LEAVED_TEAM: 'LEAVED_TEAM',
  JOINING_REQUEST_RECEIVED: 'JOINING_REQUEST_RECEIVED',
  JOINING_REQUEST_REVOKED: 'JOINING_REQUEST_REVOKED',
  JOINING_REQUEST_REJECTED: 'JOINING_REQUEST_REJECTED',
  JOINING_REQUEST_ACCEPTED: 'JOINING_REQUEST_ACCEPTED'
};

export type Action = (typeof Action)[keyof typeof Action]


export const Status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  DELETED: 'DELETED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Designation = $Enums.Designation

export const Designation: typeof $Enums.Designation

export type Action = $Enums.Action

export const Action: typeof $Enums.Action

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ImportCSVS
 * const importCSVS = await prisma.importCSV.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ImportCSVS
   * const importCSVS = await prisma.importCSV.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.importCSV`: Exposes CRUD operations for the **ImportCSV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportCSVS
    * const importCSVS = await prisma.importCSV.findMany()
    * ```
    */
  get importCSV(): Prisma.ImportCSVDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRoleInTeam`: Exposes CRUD operations for the **UserRoleInTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoleInTeams
    * const userRoleInTeams = await prisma.userRoleInTeam.findMany()
    * ```
    */
  get userRoleInTeam(): Prisma.UserRoleInTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamsEditLog`: Exposes CRUD operations for the **TeamsEditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamsEditLogs
    * const teamsEditLogs = await prisma.teamsEditLog.findMany()
    * ```
    */
  get teamsEditLog(): Prisma.TeamsEditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activeInvitationOrRequest`: Exposes CRUD operations for the **ActiveInvitationOrRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActiveInvitationOrRequests
    * const activeInvitationOrRequests = await prisma.activeInvitationOrRequest.findMany()
    * ```
    */
  get activeInvitationOrRequest(): Prisma.ActiveInvitationOrRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noticeHistory`: Exposes CRUD operations for the **NoticeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoticeHistories
    * const noticeHistories = await prisma.noticeHistory.findMany()
    * ```
    */
  get noticeHistory(): Prisma.NoticeHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ImportCSV: 'ImportCSV',
    User: 'User',
    Teams: 'Teams',
    UserRoleInTeam: 'UserRoleInTeam',
    Tag: 'Tag',
    TeamsEditLog: 'TeamsEditLog',
    ActiveInvitationOrRequest: 'ActiveInvitationOrRequest',
    Notice: 'Notice',
    NoticeHistory: 'NoticeHistory',
    Chat: 'Chat',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "importCSV" | "user" | "teams" | "userRoleInTeam" | "tag" | "teamsEditLog" | "activeInvitationOrRequest" | "notice" | "noticeHistory" | "chat" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ImportCSV: {
        payload: Prisma.$ImportCSVPayload<ExtArgs>
        fields: Prisma.ImportCSVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportCSVFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportCSVFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>
          }
          findFirst: {
            args: Prisma.ImportCSVFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportCSVFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>
          }
          findMany: {
            args: Prisma.ImportCSVFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>[]
          }
          create: {
            args: Prisma.ImportCSVCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>
          }
          createMany: {
            args: Prisma.ImportCSVCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportCSVCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>[]
          }
          delete: {
            args: Prisma.ImportCSVDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>
          }
          update: {
            args: Prisma.ImportCSVUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>
          }
          deleteMany: {
            args: Prisma.ImportCSVDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportCSVUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportCSVUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>[]
          }
          upsert: {
            args: Prisma.ImportCSVUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportCSVPayload>
          }
          aggregate: {
            args: Prisma.ImportCSVAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportCSV>
          }
          groupBy: {
            args: Prisma.ImportCSVGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportCSVGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportCSVCountArgs<ExtArgs>
            result: $Utils.Optional<ImportCSVCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Teams: {
        payload: Prisma.$TeamsPayload<ExtArgs>
        fields: Prisma.TeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findFirst: {
            args: Prisma.TeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findMany: {
            args: Prisma.TeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          create: {
            args: Prisma.TeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          createMany: {
            args: Prisma.TeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          delete: {
            args: Prisma.TeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          update: {
            args: Prisma.TeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          upsert: {
            args: Prisma.TeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.TeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      UserRoleInTeam: {
        payload: Prisma.$UserRoleInTeamPayload<ExtArgs>
        fields: Prisma.UserRoleInTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleInTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleInTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>
          }
          findFirst: {
            args: Prisma.UserRoleInTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleInTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>
          }
          findMany: {
            args: Prisma.UserRoleInTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>[]
          }
          create: {
            args: Prisma.UserRoleInTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>
          }
          createMany: {
            args: Prisma.UserRoleInTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleInTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>[]
          }
          delete: {
            args: Prisma.UserRoleInTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>
          }
          update: {
            args: Prisma.UserRoleInTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>
          }
          deleteMany: {
            args: Prisma.UserRoleInTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleInTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleInTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>[]
          }
          upsert: {
            args: Prisma.UserRoleInTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleInTeamPayload>
          }
          aggregate: {
            args: Prisma.UserRoleInTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRoleInTeam>
          }
          groupBy: {
            args: Prisma.UserRoleInTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleInTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleInTeamCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleInTeamCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TeamsEditLog: {
        payload: Prisma.$TeamsEditLogPayload<ExtArgs>
        fields: Prisma.TeamsEditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsEditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsEditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>
          }
          findFirst: {
            args: Prisma.TeamsEditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsEditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>
          }
          findMany: {
            args: Prisma.TeamsEditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>[]
          }
          create: {
            args: Prisma.TeamsEditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>
          }
          createMany: {
            args: Prisma.TeamsEditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsEditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>[]
          }
          delete: {
            args: Prisma.TeamsEditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>
          }
          update: {
            args: Prisma.TeamsEditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>
          }
          deleteMany: {
            args: Prisma.TeamsEditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsEditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsEditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>[]
          }
          upsert: {
            args: Prisma.TeamsEditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsEditLogPayload>
          }
          aggregate: {
            args: Prisma.TeamsEditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamsEditLog>
          }
          groupBy: {
            args: Prisma.TeamsEditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsEditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsEditLogCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsEditLogCountAggregateOutputType> | number
          }
        }
      }
      ActiveInvitationOrRequest: {
        payload: Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>
        fields: Prisma.ActiveInvitationOrRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiveInvitationOrRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiveInvitationOrRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>
          }
          findFirst: {
            args: Prisma.ActiveInvitationOrRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiveInvitationOrRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>
          }
          findMany: {
            args: Prisma.ActiveInvitationOrRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>[]
          }
          create: {
            args: Prisma.ActiveInvitationOrRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>
          }
          createMany: {
            args: Prisma.ActiveInvitationOrRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiveInvitationOrRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>[]
          }
          delete: {
            args: Prisma.ActiveInvitationOrRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>
          }
          update: {
            args: Prisma.ActiveInvitationOrRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>
          }
          deleteMany: {
            args: Prisma.ActiveInvitationOrRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiveInvitationOrRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActiveInvitationOrRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>[]
          }
          upsert: {
            args: Prisma.ActiveInvitationOrRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveInvitationOrRequestPayload>
          }
          aggregate: {
            args: Prisma.ActiveInvitationOrRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActiveInvitationOrRequest>
          }
          groupBy: {
            args: Prisma.ActiveInvitationOrRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiveInvitationOrRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiveInvitationOrRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ActiveInvitationOrRequestCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      NoticeHistory: {
        payload: Prisma.$NoticeHistoryPayload<ExtArgs>
        fields: Prisma.NoticeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>
          }
          findFirst: {
            args: Prisma.NoticeHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>
          }
          findMany: {
            args: Prisma.NoticeHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>[]
          }
          create: {
            args: Prisma.NoticeHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>
          }
          createMany: {
            args: Prisma.NoticeHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>[]
          }
          delete: {
            args: Prisma.NoticeHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>
          }
          update: {
            args: Prisma.NoticeHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.NoticeHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticeHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>[]
          }
          upsert: {
            args: Prisma.NoticeHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeHistoryPayload>
          }
          aggregate: {
            args: Prisma.NoticeHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticeHistory>
          }
          groupBy: {
            args: Prisma.NoticeHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeHistoryCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    importCSV?: ImportCSVOmit
    user?: UserOmit
    teams?: TeamsOmit
    userRoleInTeam?: UserRoleInTeamOmit
    tag?: TagOmit
    teamsEditLog?: TeamsEditLogOmit
    activeInvitationOrRequest?: ActiveInvitationOrRequestOmit
    notice?: NoticeOmit
    noticeHistory?: NoticeHistoryOmit
    chat?: ChatOmit
    message?: MessageOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tags: number
    teamLeaderOf: number
    teams: number
    ActiveRequests: number
    TeamsEditLog: number
    userRoleInTeam: number
    chats: number
    messages: number
    notices: number
    noticeHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | UserCountOutputTypeCountTagsArgs
    teamLeaderOf?: boolean | UserCountOutputTypeCountTeamLeaderOfArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    ActiveRequests?: boolean | UserCountOutputTypeCountActiveRequestsArgs
    TeamsEditLog?: boolean | UserCountOutputTypeCountTeamsEditLogArgs
    userRoleInTeam?: boolean | UserCountOutputTypeCountUserRoleInTeamArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    notices?: boolean | UserCountOutputTypeCountNoticesArgs
    noticeHistory?: boolean | UserCountOutputTypeCountNoticeHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamLeaderOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActiveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveInvitationOrRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsEditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsEditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRoleInTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleInTeamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoticeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeHistoryWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    members: number
    tags: number
    logs: number
    userRoleInTeam: number
    ActiveRequests: number
    chats: number
    notices: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamsCountOutputTypeCountMembersArgs
    tags?: boolean | TeamsCountOutputTypeCountTagsArgs
    logs?: boolean | TeamsCountOutputTypeCountLogsArgs
    userRoleInTeam?: boolean | TeamsCountOutputTypeCountUserRoleInTeamArgs
    ActiveRequests?: boolean | TeamsCountOutputTypeCountActiveRequestsArgs
    chats?: boolean | TeamsCountOutputTypeCountChatsArgs
    notices?: boolean | TeamsCountOutputTypeCountNoticesArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsEditLogWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountUserRoleInTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleInTeamWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountActiveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveInvitationOrRequestWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountNoticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    teams: number
    users: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | TagCountOutputTypeCountTeamsArgs
    users?: boolean | TagCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type NoticeCountOutputType
   */

  export type NoticeCountOutputType = {
    history: number
  }

  export type NoticeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | NoticeCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * NoticeCountOutputType without action
   */
  export type NoticeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeCountOutputType
     */
    select?: NoticeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoticeCountOutputType without action
   */
  export type NoticeCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeHistoryWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
    members: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    members?: boolean | ChatCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ImportCSV
   */

  export type AggregateImportCSV = {
    _count: ImportCSVCountAggregateOutputType | null
    _min: ImportCSVMinAggregateOutputType | null
    _max: ImportCSVMaxAggregateOutputType | null
  }

  export type ImportCSVMinAggregateOutputType = {
    id: string | null
    email: string | null
    mobileNumber: string | null
  }

  export type ImportCSVMaxAggregateOutputType = {
    id: string | null
    email: string | null
    mobileNumber: string | null
  }

  export type ImportCSVCountAggregateOutputType = {
    id: number
    email: number
    mobileNumber: number
    courseName: number
    _all: number
  }


  export type ImportCSVMinAggregateInputType = {
    id?: true
    email?: true
    mobileNumber?: true
  }

  export type ImportCSVMaxAggregateInputType = {
    id?: true
    email?: true
    mobileNumber?: true
  }

  export type ImportCSVCountAggregateInputType = {
    id?: true
    email?: true
    mobileNumber?: true
    courseName?: true
    _all?: true
  }

  export type ImportCSVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportCSV to aggregate.
     */
    where?: ImportCSVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportCSVS to fetch.
     */
    orderBy?: ImportCSVOrderByWithRelationInput | ImportCSVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportCSVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportCSVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportCSVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportCSVS
    **/
    _count?: true | ImportCSVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportCSVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportCSVMaxAggregateInputType
  }

  export type GetImportCSVAggregateType<T extends ImportCSVAggregateArgs> = {
        [P in keyof T & keyof AggregateImportCSV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportCSV[P]>
      : GetScalarType<T[P], AggregateImportCSV[P]>
  }




  export type ImportCSVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportCSVWhereInput
    orderBy?: ImportCSVOrderByWithAggregationInput | ImportCSVOrderByWithAggregationInput[]
    by: ImportCSVScalarFieldEnum[] | ImportCSVScalarFieldEnum
    having?: ImportCSVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportCSVCountAggregateInputType | true
    _min?: ImportCSVMinAggregateInputType
    _max?: ImportCSVMaxAggregateInputType
  }

  export type ImportCSVGroupByOutputType = {
    id: string
    email: string
    mobileNumber: string
    courseName: string[]
    _count: ImportCSVCountAggregateOutputType | null
    _min: ImportCSVMinAggregateOutputType | null
    _max: ImportCSVMaxAggregateOutputType | null
  }

  type GetImportCSVGroupByPayload<T extends ImportCSVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportCSVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportCSVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportCSVGroupByOutputType[P]>
            : GetScalarType<T[P], ImportCSVGroupByOutputType[P]>
        }
      >
    >


  export type ImportCSVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mobileNumber?: boolean
    courseName?: boolean
  }, ExtArgs["result"]["importCSV"]>

  export type ImportCSVSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mobileNumber?: boolean
    courseName?: boolean
  }, ExtArgs["result"]["importCSV"]>

  export type ImportCSVSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mobileNumber?: boolean
    courseName?: boolean
  }, ExtArgs["result"]["importCSV"]>

  export type ImportCSVSelectScalar = {
    id?: boolean
    email?: boolean
    mobileNumber?: boolean
    courseName?: boolean
  }

  export type ImportCSVOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "mobileNumber" | "courseName", ExtArgs["result"]["importCSV"]>

  export type $ImportCSVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportCSV"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      mobileNumber: string
      courseName: string[]
    }, ExtArgs["result"]["importCSV"]>
    composites: {}
  }

  type ImportCSVGetPayload<S extends boolean | null | undefined | ImportCSVDefaultArgs> = $Result.GetResult<Prisma.$ImportCSVPayload, S>

  type ImportCSVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportCSVFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportCSVCountAggregateInputType | true
    }

  export interface ImportCSVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportCSV'], meta: { name: 'ImportCSV' } }
    /**
     * Find zero or one ImportCSV that matches the filter.
     * @param {ImportCSVFindUniqueArgs} args - Arguments to find a ImportCSV
     * @example
     * // Get one ImportCSV
     * const importCSV = await prisma.importCSV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportCSVFindUniqueArgs>(args: SelectSubset<T, ImportCSVFindUniqueArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportCSV that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportCSVFindUniqueOrThrowArgs} args - Arguments to find a ImportCSV
     * @example
     * // Get one ImportCSV
     * const importCSV = await prisma.importCSV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportCSVFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportCSVFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportCSV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVFindFirstArgs} args - Arguments to find a ImportCSV
     * @example
     * // Get one ImportCSV
     * const importCSV = await prisma.importCSV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportCSVFindFirstArgs>(args?: SelectSubset<T, ImportCSVFindFirstArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportCSV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVFindFirstOrThrowArgs} args - Arguments to find a ImportCSV
     * @example
     * // Get one ImportCSV
     * const importCSV = await prisma.importCSV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportCSVFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportCSVFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportCSVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportCSVS
     * const importCSVS = await prisma.importCSV.findMany()
     * 
     * // Get first 10 ImportCSVS
     * const importCSVS = await prisma.importCSV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importCSVWithIdOnly = await prisma.importCSV.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportCSVFindManyArgs>(args?: SelectSubset<T, ImportCSVFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportCSV.
     * @param {ImportCSVCreateArgs} args - Arguments to create a ImportCSV.
     * @example
     * // Create one ImportCSV
     * const ImportCSV = await prisma.importCSV.create({
     *   data: {
     *     // ... data to create a ImportCSV
     *   }
     * })
     * 
     */
    create<T extends ImportCSVCreateArgs>(args: SelectSubset<T, ImportCSVCreateArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportCSVS.
     * @param {ImportCSVCreateManyArgs} args - Arguments to create many ImportCSVS.
     * @example
     * // Create many ImportCSVS
     * const importCSV = await prisma.importCSV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportCSVCreateManyArgs>(args?: SelectSubset<T, ImportCSVCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportCSVS and returns the data saved in the database.
     * @param {ImportCSVCreateManyAndReturnArgs} args - Arguments to create many ImportCSVS.
     * @example
     * // Create many ImportCSVS
     * const importCSV = await prisma.importCSV.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportCSVS and only return the `id`
     * const importCSVWithIdOnly = await prisma.importCSV.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportCSVCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportCSVCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportCSV.
     * @param {ImportCSVDeleteArgs} args - Arguments to delete one ImportCSV.
     * @example
     * // Delete one ImportCSV
     * const ImportCSV = await prisma.importCSV.delete({
     *   where: {
     *     // ... filter to delete one ImportCSV
     *   }
     * })
     * 
     */
    delete<T extends ImportCSVDeleteArgs>(args: SelectSubset<T, ImportCSVDeleteArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportCSV.
     * @param {ImportCSVUpdateArgs} args - Arguments to update one ImportCSV.
     * @example
     * // Update one ImportCSV
     * const importCSV = await prisma.importCSV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportCSVUpdateArgs>(args: SelectSubset<T, ImportCSVUpdateArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportCSVS.
     * @param {ImportCSVDeleteManyArgs} args - Arguments to filter ImportCSVS to delete.
     * @example
     * // Delete a few ImportCSVS
     * const { count } = await prisma.importCSV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportCSVDeleteManyArgs>(args?: SelectSubset<T, ImportCSVDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportCSVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportCSVS
     * const importCSV = await prisma.importCSV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportCSVUpdateManyArgs>(args: SelectSubset<T, ImportCSVUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportCSVS and returns the data updated in the database.
     * @param {ImportCSVUpdateManyAndReturnArgs} args - Arguments to update many ImportCSVS.
     * @example
     * // Update many ImportCSVS
     * const importCSV = await prisma.importCSV.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportCSVS and only return the `id`
     * const importCSVWithIdOnly = await prisma.importCSV.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportCSVUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportCSVUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportCSV.
     * @param {ImportCSVUpsertArgs} args - Arguments to update or create a ImportCSV.
     * @example
     * // Update or create a ImportCSV
     * const importCSV = await prisma.importCSV.upsert({
     *   create: {
     *     // ... data to create a ImportCSV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportCSV we want to update
     *   }
     * })
     */
    upsert<T extends ImportCSVUpsertArgs>(args: SelectSubset<T, ImportCSVUpsertArgs<ExtArgs>>): Prisma__ImportCSVClient<$Result.GetResult<Prisma.$ImportCSVPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportCSVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVCountArgs} args - Arguments to filter ImportCSVS to count.
     * @example
     * // Count the number of ImportCSVS
     * const count = await prisma.importCSV.count({
     *   where: {
     *     // ... the filter for the ImportCSVS we want to count
     *   }
     * })
    **/
    count<T extends ImportCSVCountArgs>(
      args?: Subset<T, ImportCSVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportCSVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportCSV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportCSVAggregateArgs>(args: Subset<T, ImportCSVAggregateArgs>): Prisma.PrismaPromise<GetImportCSVAggregateType<T>>

    /**
     * Group by ImportCSV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportCSVGroupByArgs} args - Group by arguments.
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
      T extends ImportCSVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportCSVGroupByArgs['orderBy'] }
        : { orderBy?: ImportCSVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImportCSVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportCSVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportCSV model
   */
  readonly fields: ImportCSVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportCSV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportCSVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportCSV model
   */
  interface ImportCSVFieldRefs {
    readonly id: FieldRef<"ImportCSV", 'String'>
    readonly email: FieldRef<"ImportCSV", 'String'>
    readonly mobileNumber: FieldRef<"ImportCSV", 'String'>
    readonly courseName: FieldRef<"ImportCSV", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * ImportCSV findUnique
   */
  export type ImportCSVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * Filter, which ImportCSV to fetch.
     */
    where: ImportCSVWhereUniqueInput
  }

  /**
   * ImportCSV findUniqueOrThrow
   */
  export type ImportCSVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * Filter, which ImportCSV to fetch.
     */
    where: ImportCSVWhereUniqueInput
  }

  /**
   * ImportCSV findFirst
   */
  export type ImportCSVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * Filter, which ImportCSV to fetch.
     */
    where?: ImportCSVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportCSVS to fetch.
     */
    orderBy?: ImportCSVOrderByWithRelationInput | ImportCSVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportCSVS.
     */
    cursor?: ImportCSVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportCSVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportCSVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportCSVS.
     */
    distinct?: ImportCSVScalarFieldEnum | ImportCSVScalarFieldEnum[]
  }

  /**
   * ImportCSV findFirstOrThrow
   */
  export type ImportCSVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * Filter, which ImportCSV to fetch.
     */
    where?: ImportCSVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportCSVS to fetch.
     */
    orderBy?: ImportCSVOrderByWithRelationInput | ImportCSVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportCSVS.
     */
    cursor?: ImportCSVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportCSVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportCSVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportCSVS.
     */
    distinct?: ImportCSVScalarFieldEnum | ImportCSVScalarFieldEnum[]
  }

  /**
   * ImportCSV findMany
   */
  export type ImportCSVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * Filter, which ImportCSVS to fetch.
     */
    where?: ImportCSVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportCSVS to fetch.
     */
    orderBy?: ImportCSVOrderByWithRelationInput | ImportCSVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportCSVS.
     */
    cursor?: ImportCSVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportCSVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportCSVS.
     */
    skip?: number
    distinct?: ImportCSVScalarFieldEnum | ImportCSVScalarFieldEnum[]
  }

  /**
   * ImportCSV create
   */
  export type ImportCSVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * The data needed to create a ImportCSV.
     */
    data: XOR<ImportCSVCreateInput, ImportCSVUncheckedCreateInput>
  }

  /**
   * ImportCSV createMany
   */
  export type ImportCSVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportCSVS.
     */
    data: ImportCSVCreateManyInput | ImportCSVCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportCSV createManyAndReturn
   */
  export type ImportCSVCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * The data used to create many ImportCSVS.
     */
    data: ImportCSVCreateManyInput | ImportCSVCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportCSV update
   */
  export type ImportCSVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * The data needed to update a ImportCSV.
     */
    data: XOR<ImportCSVUpdateInput, ImportCSVUncheckedUpdateInput>
    /**
     * Choose, which ImportCSV to update.
     */
    where: ImportCSVWhereUniqueInput
  }

  /**
   * ImportCSV updateMany
   */
  export type ImportCSVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportCSVS.
     */
    data: XOR<ImportCSVUpdateManyMutationInput, ImportCSVUncheckedUpdateManyInput>
    /**
     * Filter which ImportCSVS to update
     */
    where?: ImportCSVWhereInput
    /**
     * Limit how many ImportCSVS to update.
     */
    limit?: number
  }

  /**
   * ImportCSV updateManyAndReturn
   */
  export type ImportCSVUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * The data used to update ImportCSVS.
     */
    data: XOR<ImportCSVUpdateManyMutationInput, ImportCSVUncheckedUpdateManyInput>
    /**
     * Filter which ImportCSVS to update
     */
    where?: ImportCSVWhereInput
    /**
     * Limit how many ImportCSVS to update.
     */
    limit?: number
  }

  /**
   * ImportCSV upsert
   */
  export type ImportCSVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * The filter to search for the ImportCSV to update in case it exists.
     */
    where: ImportCSVWhereUniqueInput
    /**
     * In case the ImportCSV found by the `where` argument doesn't exist, create a new ImportCSV with this data.
     */
    create: XOR<ImportCSVCreateInput, ImportCSVUncheckedCreateInput>
    /**
     * In case the ImportCSV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportCSVUpdateInput, ImportCSVUncheckedUpdateInput>
  }

  /**
   * ImportCSV delete
   */
  export type ImportCSVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
    /**
     * Filter which ImportCSV to delete.
     */
    where: ImportCSVWhereUniqueInput
  }

  /**
   * ImportCSV deleteMany
   */
  export type ImportCSVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportCSVS to delete
     */
    where?: ImportCSVWhereInput
    /**
     * Limit how many ImportCSVS to delete.
     */
    limit?: number
  }

  /**
   * ImportCSV without action
   */
  export type ImportCSVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportCSV
     */
    select?: ImportCSVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportCSV
     */
    omit?: ImportCSVOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobileNumber: string | null
    username: string | null
    password: string | null
    about: string | null
    role: string | null
    isTeamLeader: boolean | null
    isActive: boolean | null
    twitter: string | null
    github: string | null
    linkedIn: string | null
    hashnode: string | null
    peerlist: string | null
    createdAt: Date | null
    updatedAt: Date | null
    designation: $Enums.Designation | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobileNumber: string | null
    username: string | null
    password: string | null
    about: string | null
    role: string | null
    isTeamLeader: boolean | null
    isActive: boolean | null
    twitter: string | null
    github: string | null
    linkedIn: string | null
    hashnode: string | null
    peerlist: string | null
    createdAt: Date | null
    updatedAt: Date | null
    designation: $Enums.Designation | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    email: number
    mobileNumber: number
    username: number
    password: number
    courseName: number
    about: number
    role: number
    isTeamLeader: number
    isActive: number
    twitter: number
    github: number
    linkedIn: number
    hashnode: number
    peerlist: number
    createdAt: number
    updatedAt: number
    designation: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    mobileNumber?: true
    username?: true
    password?: true
    about?: true
    role?: true
    isTeamLeader?: true
    isActive?: true
    twitter?: true
    github?: true
    linkedIn?: true
    hashnode?: true
    peerlist?: true
    createdAt?: true
    updatedAt?: true
    designation?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    mobileNumber?: true
    username?: true
    password?: true
    about?: true
    role?: true
    isTeamLeader?: true
    isActive?: true
    twitter?: true
    github?: true
    linkedIn?: true
    hashnode?: true
    peerlist?: true
    createdAt?: true
    updatedAt?: true
    designation?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    mobileNumber?: true
    username?: true
    password?: true
    courseName?: true
    about?: true
    role?: true
    isTeamLeader?: true
    isActive?: true
    twitter?: true
    github?: true
    linkedIn?: true
    hashnode?: true
    peerlist?: true
    createdAt?: true
    updatedAt?: true
    designation?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName: string[]
    about: string
    role: string
    isTeamLeader: boolean
    isActive: boolean
    twitter: string | null
    github: string | null
    linkedIn: string | null
    hashnode: string | null
    peerlist: string | null
    createdAt: Date
    updatedAt: Date
    designation: $Enums.Designation | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobileNumber?: boolean
    username?: boolean
    password?: boolean
    courseName?: boolean
    about?: boolean
    role?: boolean
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
    hashnode?: boolean
    peerlist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    designation?: boolean
    tags?: boolean | User$tagsArgs<ExtArgs>
    teamLeaderOf?: boolean | User$teamLeaderOfArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    ActiveRequests?: boolean | User$ActiveRequestsArgs<ExtArgs>
    TeamsEditLog?: boolean | User$TeamsEditLogArgs<ExtArgs>
    userRoleInTeam?: boolean | User$userRoleInTeamArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    notices?: boolean | User$noticesArgs<ExtArgs>
    noticeHistory?: boolean | User$noticeHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobileNumber?: boolean
    username?: boolean
    password?: boolean
    courseName?: boolean
    about?: boolean
    role?: boolean
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
    hashnode?: boolean
    peerlist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    designation?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobileNumber?: boolean
    username?: boolean
    password?: boolean
    courseName?: boolean
    about?: boolean
    role?: boolean
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
    hashnode?: boolean
    peerlist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    designation?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobileNumber?: boolean
    username?: boolean
    password?: boolean
    courseName?: boolean
    about?: boolean
    role?: boolean
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
    hashnode?: boolean
    peerlist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    designation?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "firstName" | "lastName" | "email" | "mobileNumber" | "username" | "password" | "courseName" | "about" | "role" | "isTeamLeader" | "isActive" | "twitter" | "github" | "linkedIn" | "hashnode" | "peerlist" | "createdAt" | "updatedAt" | "designation", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | User$tagsArgs<ExtArgs>
    teamLeaderOf?: boolean | User$teamLeaderOfArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    ActiveRequests?: boolean | User$ActiveRequestsArgs<ExtArgs>
    TeamsEditLog?: boolean | User$TeamsEditLogArgs<ExtArgs>
    userRoleInTeam?: boolean | User$userRoleInTeamArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    notices?: boolean | User$noticesArgs<ExtArgs>
    noticeHistory?: boolean | User$noticeHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>[]
      teamLeaderOf: Prisma.$TeamsPayload<ExtArgs>[]
      teams: Prisma.$TeamsPayload<ExtArgs>[]
      ActiveRequests: Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>[]
      TeamsEditLog: Prisma.$TeamsEditLogPayload<ExtArgs>[]
      userRoleInTeam: Prisma.$UserRoleInTeamPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      notices: Prisma.$NoticePayload<ExtArgs>[]
      noticeHistory: Prisma.$NoticeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string
      lastName: string
      email: string
      mobileNumber: string
      username: string
      password: string
      courseName: string[]
      about: string
      role: string
      isTeamLeader: boolean
      isActive: boolean
      twitter: string | null
      github: string | null
      linkedIn: string | null
      hashnode: string | null
      peerlist: string | null
      createdAt: Date
      updatedAt: Date
      designation: $Enums.Designation | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamLeaderOf<T extends User$teamLeaderOfArgs<ExtArgs> = {}>(args?: Subset<T, User$teamLeaderOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ActiveRequests<T extends User$ActiveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$ActiveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TeamsEditLog<T extends User$TeamsEditLogArgs<ExtArgs> = {}>(args?: Subset<T, User$TeamsEditLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoleInTeam<T extends User$userRoleInTeamArgs<ExtArgs> = {}>(args?: Subset<T, User$userRoleInTeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notices<T extends User$noticesArgs<ExtArgs> = {}>(args?: Subset<T, User$noticesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noticeHistory<T extends User$noticeHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$noticeHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mobileNumber: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly courseName: FieldRef<"User", 'String[]'>
    readonly about: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isTeamLeader: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly github: FieldRef<"User", 'String'>
    readonly linkedIn: FieldRef<"User", 'String'>
    readonly hashnode: FieldRef<"User", 'String'>
    readonly peerlist: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly designation: FieldRef<"User", 'Designation'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.teamLeaderOf
   */
  export type User$teamLeaderOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * User.ActiveRequests
   */
  export type User$ActiveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    where?: ActiveInvitationOrRequestWhereInput
    orderBy?: ActiveInvitationOrRequestOrderByWithRelationInput | ActiveInvitationOrRequestOrderByWithRelationInput[]
    cursor?: ActiveInvitationOrRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveInvitationOrRequestScalarFieldEnum | ActiveInvitationOrRequestScalarFieldEnum[]
  }

  /**
   * User.TeamsEditLog
   */
  export type User$TeamsEditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    where?: TeamsEditLogWhereInput
    orderBy?: TeamsEditLogOrderByWithRelationInput | TeamsEditLogOrderByWithRelationInput[]
    cursor?: TeamsEditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsEditLogScalarFieldEnum | TeamsEditLogScalarFieldEnum[]
  }

  /**
   * User.userRoleInTeam
   */
  export type User$userRoleInTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    where?: UserRoleInTeamWhereInput
    orderBy?: UserRoleInTeamOrderByWithRelationInput | UserRoleInTeamOrderByWithRelationInput[]
    cursor?: UserRoleInTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleInTeamScalarFieldEnum | UserRoleInTeamScalarFieldEnum[]
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.notices
   */
  export type User$noticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * User.noticeHistory
   */
  export type User$noticeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    where?: NoticeHistoryWhereInput
    orderBy?: NoticeHistoryOrderByWithRelationInput | NoticeHistoryOrderByWithRelationInput[]
    cursor?: NoticeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeHistoryScalarFieldEnum | NoticeHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    uniqueTitle: string | null
    title: string | null
    about: string | null
    teamLeaderId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    uniqueTitle: string | null
    title: string | null
    about: string | null
    teamLeaderId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    uniqueTitle: number
    title: number
    about: number
    teamLeaderId: number
    isActive: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    uniqueTitle?: true
    title?: true
    about?: true
    teamLeaderId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    uniqueTitle?: true
    title?: true
    about?: true
    teamLeaderId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    uniqueTitle?: true
    title?: true
    about?: true
    teamLeaderId?: true
    isActive?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to aggregate.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithAggregationInput | TeamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive: boolean
    link: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueTitle?: boolean
    title?: boolean
    about?: boolean
    teamLeaderId?: boolean
    isActive?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamLeader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Teams$membersArgs<ExtArgs>
    tags?: boolean | Teams$tagsArgs<ExtArgs>
    logs?: boolean | Teams$logsArgs<ExtArgs>
    userRoleInTeam?: boolean | Teams$userRoleInTeamArgs<ExtArgs>
    ActiveRequests?: boolean | Teams$ActiveRequestsArgs<ExtArgs>
    chats?: boolean | Teams$chatsArgs<ExtArgs>
    notices?: boolean | Teams$noticesArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueTitle?: boolean
    title?: boolean
    about?: boolean
    teamLeaderId?: boolean
    isActive?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamLeader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueTitle?: boolean
    title?: boolean
    about?: boolean
    teamLeaderId?: boolean
    isActive?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamLeader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectScalar = {
    id?: boolean
    uniqueTitle?: boolean
    title?: boolean
    about?: boolean
    teamLeaderId?: boolean
    isActive?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueTitle" | "title" | "about" | "teamLeaderId" | "isActive" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["teams"]>
  export type TeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamLeader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Teams$membersArgs<ExtArgs>
    tags?: boolean | Teams$tagsArgs<ExtArgs>
    logs?: boolean | Teams$logsArgs<ExtArgs>
    userRoleInTeam?: boolean | Teams$userRoleInTeamArgs<ExtArgs>
    ActiveRequests?: boolean | Teams$ActiveRequestsArgs<ExtArgs>
    chats?: boolean | Teams$chatsArgs<ExtArgs>
    notices?: boolean | Teams$noticesArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamLeader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamLeader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teams"
    objects: {
      teamLeader: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      logs: Prisma.$TeamsEditLogPayload<ExtArgs>[]
      userRoleInTeam: Prisma.$UserRoleInTeamPayload<ExtArgs>[]
      ActiveRequests: Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      notices: Prisma.$NoticePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uniqueTitle: string
      title: string
      about: string
      teamLeaderId: string
      isActive: boolean
      link: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type TeamsGetPayload<S extends boolean | null | undefined | TeamsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPayload, S>

  type TeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface TeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teams'], meta: { name: 'Teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsFindUniqueArgs>(args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsFindFirstArgs>(args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsFindManyArgs>(args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends TeamsCreateArgs>(args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsCreateManyArgs>(args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends TeamsDeleteArgs>(args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsUpdateArgs>(args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsDeleteManyArgs>(args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsUpdateManyArgs>(args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends TeamsUpsertArgs>(args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
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
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teams model
   */
  readonly fields: TeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamLeader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Teams$membersArgs<ExtArgs> = {}>(args?: Subset<T, Teams$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Teams$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Teams$logsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoleInTeam<T extends Teams$userRoleInTeamArgs<ExtArgs> = {}>(args?: Subset<T, Teams$userRoleInTeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ActiveRequests<T extends Teams$ActiveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$ActiveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Teams$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notices<T extends Teams$noticesArgs<ExtArgs> = {}>(args?: Subset<T, Teams$noticesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teams model
   */
  interface TeamsFieldRefs {
    readonly id: FieldRef<"Teams", 'String'>
    readonly uniqueTitle: FieldRef<"Teams", 'String'>
    readonly title: FieldRef<"Teams", 'String'>
    readonly about: FieldRef<"Teams", 'String'>
    readonly teamLeaderId: FieldRef<"Teams", 'String'>
    readonly isActive: FieldRef<"Teams", 'Boolean'>
    readonly link: FieldRef<"Teams", 'Json'>
    readonly createdAt: FieldRef<"Teams", 'DateTime'>
    readonly updatedAt: FieldRef<"Teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams create
   */
  export type TeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Teams.
     */
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }

  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams createManyAndReturn
   */
  export type TeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teams update
   */
  export type TeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Teams.
     */
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams updateManyAndReturn
   */
  export type TeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Teams to update in case it exists.
     */
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     */
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }

  /**
   * Teams delete
   */
  export type TeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter which Teams to delete.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Teams.members
   */
  export type Teams$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Teams.tags
   */
  export type Teams$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Teams.logs
   */
  export type Teams$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    where?: TeamsEditLogWhereInput
    orderBy?: TeamsEditLogOrderByWithRelationInput | TeamsEditLogOrderByWithRelationInput[]
    cursor?: TeamsEditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsEditLogScalarFieldEnum | TeamsEditLogScalarFieldEnum[]
  }

  /**
   * Teams.userRoleInTeam
   */
  export type Teams$userRoleInTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    where?: UserRoleInTeamWhereInput
    orderBy?: UserRoleInTeamOrderByWithRelationInput | UserRoleInTeamOrderByWithRelationInput[]
    cursor?: UserRoleInTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleInTeamScalarFieldEnum | UserRoleInTeamScalarFieldEnum[]
  }

  /**
   * Teams.ActiveRequests
   */
  export type Teams$ActiveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    where?: ActiveInvitationOrRequestWhereInput
    orderBy?: ActiveInvitationOrRequestOrderByWithRelationInput | ActiveInvitationOrRequestOrderByWithRelationInput[]
    cursor?: ActiveInvitationOrRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveInvitationOrRequestScalarFieldEnum | ActiveInvitationOrRequestScalarFieldEnum[]
  }

  /**
   * Teams.chats
   */
  export type Teams$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Teams.notices
   */
  export type Teams$noticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Teams without action
   */
  export type TeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
  }


  /**
   * Model UserRoleInTeam
   */

  export type AggregateUserRoleInTeam = {
    _count: UserRoleInTeamCountAggregateOutputType | null
    _min: UserRoleInTeamMinAggregateOutputType | null
    _max: UserRoleInTeamMaxAggregateOutputType | null
  }

  export type UserRoleInTeamMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    designation: $Enums.Designation | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleInTeamMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    designation: $Enums.Designation | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleInTeamCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    designation: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleInTeamMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    designation?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleInTeamMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    designation?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleInTeamCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    designation?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleInTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleInTeam to aggregate.
     */
    where?: UserRoleInTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleInTeams to fetch.
     */
    orderBy?: UserRoleInTeamOrderByWithRelationInput | UserRoleInTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleInTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleInTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleInTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoleInTeams
    **/
    _count?: true | UserRoleInTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleInTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleInTeamMaxAggregateInputType
  }

  export type GetUserRoleInTeamAggregateType<T extends UserRoleInTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRoleInTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRoleInTeam[P]>
      : GetScalarType<T[P], AggregateUserRoleInTeam[P]>
  }




  export type UserRoleInTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleInTeamWhereInput
    orderBy?: UserRoleInTeamOrderByWithAggregationInput | UserRoleInTeamOrderByWithAggregationInput[]
    by: UserRoleInTeamScalarFieldEnum[] | UserRoleInTeamScalarFieldEnum
    having?: UserRoleInTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleInTeamCountAggregateInputType | true
    _min?: UserRoleInTeamMinAggregateInputType
    _max?: UserRoleInTeamMaxAggregateInputType
  }

  export type UserRoleInTeamGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    designation: $Enums.Designation
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserRoleInTeamCountAggregateOutputType | null
    _min: UserRoleInTeamMinAggregateOutputType | null
    _max: UserRoleInTeamMaxAggregateOutputType | null
  }

  type GetUserRoleInTeamGroupByPayload<T extends UserRoleInTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleInTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleInTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleInTeamGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleInTeamGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleInTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    designation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleInTeam"]>

  export type UserRoleInTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    designation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleInTeam"]>

  export type UserRoleInTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    designation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleInTeam"]>

  export type UserRoleInTeamSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    designation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleInTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "designation" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["userRoleInTeam"]>
  export type UserRoleInTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type UserRoleInTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type UserRoleInTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $UserRoleInTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRoleInTeam"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      designation: $Enums.Designation
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRoleInTeam"]>
    composites: {}
  }

  type UserRoleInTeamGetPayload<S extends boolean | null | undefined | UserRoleInTeamDefaultArgs> = $Result.GetResult<Prisma.$UserRoleInTeamPayload, S>

  type UserRoleInTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleInTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleInTeamCountAggregateInputType | true
    }

  export interface UserRoleInTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRoleInTeam'], meta: { name: 'UserRoleInTeam' } }
    /**
     * Find zero or one UserRoleInTeam that matches the filter.
     * @param {UserRoleInTeamFindUniqueArgs} args - Arguments to find a UserRoleInTeam
     * @example
     * // Get one UserRoleInTeam
     * const userRoleInTeam = await prisma.userRoleInTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleInTeamFindUniqueArgs>(args: SelectSubset<T, UserRoleInTeamFindUniqueArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRoleInTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleInTeamFindUniqueOrThrowArgs} args - Arguments to find a UserRoleInTeam
     * @example
     * // Get one UserRoleInTeam
     * const userRoleInTeam = await prisma.userRoleInTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleInTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleInTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRoleInTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamFindFirstArgs} args - Arguments to find a UserRoleInTeam
     * @example
     * // Get one UserRoleInTeam
     * const userRoleInTeam = await prisma.userRoleInTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleInTeamFindFirstArgs>(args?: SelectSubset<T, UserRoleInTeamFindFirstArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRoleInTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamFindFirstOrThrowArgs} args - Arguments to find a UserRoleInTeam
     * @example
     * // Get one UserRoleInTeam
     * const userRoleInTeam = await prisma.userRoleInTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleInTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleInTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoleInTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoleInTeams
     * const userRoleInTeams = await prisma.userRoleInTeam.findMany()
     * 
     * // Get first 10 UserRoleInTeams
     * const userRoleInTeams = await prisma.userRoleInTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleInTeamWithIdOnly = await prisma.userRoleInTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleInTeamFindManyArgs>(args?: SelectSubset<T, UserRoleInTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRoleInTeam.
     * @param {UserRoleInTeamCreateArgs} args - Arguments to create a UserRoleInTeam.
     * @example
     * // Create one UserRoleInTeam
     * const UserRoleInTeam = await prisma.userRoleInTeam.create({
     *   data: {
     *     // ... data to create a UserRoleInTeam
     *   }
     * })
     * 
     */
    create<T extends UserRoleInTeamCreateArgs>(args: SelectSubset<T, UserRoleInTeamCreateArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoleInTeams.
     * @param {UserRoleInTeamCreateManyArgs} args - Arguments to create many UserRoleInTeams.
     * @example
     * // Create many UserRoleInTeams
     * const userRoleInTeam = await prisma.userRoleInTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleInTeamCreateManyArgs>(args?: SelectSubset<T, UserRoleInTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoleInTeams and returns the data saved in the database.
     * @param {UserRoleInTeamCreateManyAndReturnArgs} args - Arguments to create many UserRoleInTeams.
     * @example
     * // Create many UserRoleInTeams
     * const userRoleInTeam = await prisma.userRoleInTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoleInTeams and only return the `id`
     * const userRoleInTeamWithIdOnly = await prisma.userRoleInTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleInTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleInTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRoleInTeam.
     * @param {UserRoleInTeamDeleteArgs} args - Arguments to delete one UserRoleInTeam.
     * @example
     * // Delete one UserRoleInTeam
     * const UserRoleInTeam = await prisma.userRoleInTeam.delete({
     *   where: {
     *     // ... filter to delete one UserRoleInTeam
     *   }
     * })
     * 
     */
    delete<T extends UserRoleInTeamDeleteArgs>(args: SelectSubset<T, UserRoleInTeamDeleteArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRoleInTeam.
     * @param {UserRoleInTeamUpdateArgs} args - Arguments to update one UserRoleInTeam.
     * @example
     * // Update one UserRoleInTeam
     * const userRoleInTeam = await prisma.userRoleInTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleInTeamUpdateArgs>(args: SelectSubset<T, UserRoleInTeamUpdateArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoleInTeams.
     * @param {UserRoleInTeamDeleteManyArgs} args - Arguments to filter UserRoleInTeams to delete.
     * @example
     * // Delete a few UserRoleInTeams
     * const { count } = await prisma.userRoleInTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleInTeamDeleteManyArgs>(args?: SelectSubset<T, UserRoleInTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleInTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoleInTeams
     * const userRoleInTeam = await prisma.userRoleInTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleInTeamUpdateManyArgs>(args: SelectSubset<T, UserRoleInTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleInTeams and returns the data updated in the database.
     * @param {UserRoleInTeamUpdateManyAndReturnArgs} args - Arguments to update many UserRoleInTeams.
     * @example
     * // Update many UserRoleInTeams
     * const userRoleInTeam = await prisma.userRoleInTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoleInTeams and only return the `id`
     * const userRoleInTeamWithIdOnly = await prisma.userRoleInTeam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleInTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleInTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRoleInTeam.
     * @param {UserRoleInTeamUpsertArgs} args - Arguments to update or create a UserRoleInTeam.
     * @example
     * // Update or create a UserRoleInTeam
     * const userRoleInTeam = await prisma.userRoleInTeam.upsert({
     *   create: {
     *     // ... data to create a UserRoleInTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRoleInTeam we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleInTeamUpsertArgs>(args: SelectSubset<T, UserRoleInTeamUpsertArgs<ExtArgs>>): Prisma__UserRoleInTeamClient<$Result.GetResult<Prisma.$UserRoleInTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoleInTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamCountArgs} args - Arguments to filter UserRoleInTeams to count.
     * @example
     * // Count the number of UserRoleInTeams
     * const count = await prisma.userRoleInTeam.count({
     *   where: {
     *     // ... the filter for the UserRoleInTeams we want to count
     *   }
     * })
    **/
    count<T extends UserRoleInTeamCountArgs>(
      args?: Subset<T, UserRoleInTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleInTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRoleInTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleInTeamAggregateArgs>(args: Subset<T, UserRoleInTeamAggregateArgs>): Prisma.PrismaPromise<GetUserRoleInTeamAggregateType<T>>

    /**
     * Group by UserRoleInTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleInTeamGroupByArgs} args - Group by arguments.
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
      T extends UserRoleInTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleInTeamGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleInTeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleInTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleInTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRoleInTeam model
   */
  readonly fields: UserRoleInTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRoleInTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleInTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRoleInTeam model
   */
  interface UserRoleInTeamFieldRefs {
    readonly id: FieldRef<"UserRoleInTeam", 'String'>
    readonly userId: FieldRef<"UserRoleInTeam", 'String'>
    readonly teamId: FieldRef<"UserRoleInTeam", 'String'>
    readonly designation: FieldRef<"UserRoleInTeam", 'Designation'>
    readonly isActive: FieldRef<"UserRoleInTeam", 'Boolean'>
    readonly createdAt: FieldRef<"UserRoleInTeam", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRoleInTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRoleInTeam findUnique
   */
  export type UserRoleInTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleInTeam to fetch.
     */
    where: UserRoleInTeamWhereUniqueInput
  }

  /**
   * UserRoleInTeam findUniqueOrThrow
   */
  export type UserRoleInTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleInTeam to fetch.
     */
    where: UserRoleInTeamWhereUniqueInput
  }

  /**
   * UserRoleInTeam findFirst
   */
  export type UserRoleInTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleInTeam to fetch.
     */
    where?: UserRoleInTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleInTeams to fetch.
     */
    orderBy?: UserRoleInTeamOrderByWithRelationInput | UserRoleInTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleInTeams.
     */
    cursor?: UserRoleInTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleInTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleInTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleInTeams.
     */
    distinct?: UserRoleInTeamScalarFieldEnum | UserRoleInTeamScalarFieldEnum[]
  }

  /**
   * UserRoleInTeam findFirstOrThrow
   */
  export type UserRoleInTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleInTeam to fetch.
     */
    where?: UserRoleInTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleInTeams to fetch.
     */
    orderBy?: UserRoleInTeamOrderByWithRelationInput | UserRoleInTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleInTeams.
     */
    cursor?: UserRoleInTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleInTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleInTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleInTeams.
     */
    distinct?: UserRoleInTeamScalarFieldEnum | UserRoleInTeamScalarFieldEnum[]
  }

  /**
   * UserRoleInTeam findMany
   */
  export type UserRoleInTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleInTeams to fetch.
     */
    where?: UserRoleInTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleInTeams to fetch.
     */
    orderBy?: UserRoleInTeamOrderByWithRelationInput | UserRoleInTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoleInTeams.
     */
    cursor?: UserRoleInTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleInTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleInTeams.
     */
    skip?: number
    distinct?: UserRoleInTeamScalarFieldEnum | UserRoleInTeamScalarFieldEnum[]
  }

  /**
   * UserRoleInTeam create
   */
  export type UserRoleInTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRoleInTeam.
     */
    data: XOR<UserRoleInTeamCreateInput, UserRoleInTeamUncheckedCreateInput>
  }

  /**
   * UserRoleInTeam createMany
   */
  export type UserRoleInTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoleInTeams.
     */
    data: UserRoleInTeamCreateManyInput | UserRoleInTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRoleInTeam createManyAndReturn
   */
  export type UserRoleInTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoleInTeams.
     */
    data: UserRoleInTeamCreateManyInput | UserRoleInTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoleInTeam update
   */
  export type UserRoleInTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRoleInTeam.
     */
    data: XOR<UserRoleInTeamUpdateInput, UserRoleInTeamUncheckedUpdateInput>
    /**
     * Choose, which UserRoleInTeam to update.
     */
    where: UserRoleInTeamWhereUniqueInput
  }

  /**
   * UserRoleInTeam updateMany
   */
  export type UserRoleInTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoleInTeams.
     */
    data: XOR<UserRoleInTeamUpdateManyMutationInput, UserRoleInTeamUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleInTeams to update
     */
    where?: UserRoleInTeamWhereInput
    /**
     * Limit how many UserRoleInTeams to update.
     */
    limit?: number
  }

  /**
   * UserRoleInTeam updateManyAndReturn
   */
  export type UserRoleInTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * The data used to update UserRoleInTeams.
     */
    data: XOR<UserRoleInTeamUpdateManyMutationInput, UserRoleInTeamUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleInTeams to update
     */
    where?: UserRoleInTeamWhereInput
    /**
     * Limit how many UserRoleInTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoleInTeam upsert
   */
  export type UserRoleInTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRoleInTeam to update in case it exists.
     */
    where: UserRoleInTeamWhereUniqueInput
    /**
     * In case the UserRoleInTeam found by the `where` argument doesn't exist, create a new UserRoleInTeam with this data.
     */
    create: XOR<UserRoleInTeamCreateInput, UserRoleInTeamUncheckedCreateInput>
    /**
     * In case the UserRoleInTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleInTeamUpdateInput, UserRoleInTeamUncheckedUpdateInput>
  }

  /**
   * UserRoleInTeam delete
   */
  export type UserRoleInTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
    /**
     * Filter which UserRoleInTeam to delete.
     */
    where: UserRoleInTeamWhereUniqueInput
  }

  /**
   * UserRoleInTeam deleteMany
   */
  export type UserRoleInTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleInTeams to delete
     */
    where?: UserRoleInTeamWhereInput
    /**
     * Limit how many UserRoleInTeams to delete.
     */
    limit?: number
  }

  /**
   * UserRoleInTeam without action
   */
  export type UserRoleInTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleInTeam
     */
    select?: UserRoleInTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleInTeam
     */
    omit?: UserRoleInTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInTeamInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teams?: boolean | Tag$teamsArgs<ExtArgs>
    users?: boolean | Tag$usersArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Tag$teamsArgs<ExtArgs>
    users?: boolean | Tag$usersArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      teams: Prisma.$TeamsPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Tag$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Tag$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tag$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.teams
   */
  export type Tag$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Tag.users
   */
  export type Tag$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TeamsEditLog
   */

  export type AggregateTeamsEditLog = {
    _count: TeamsEditLogCountAggregateOutputType | null
    _min: TeamsEditLogMinAggregateOutputType | null
    _max: TeamsEditLogMaxAggregateOutputType | null
  }

  export type TeamsEditLogMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    teamId: string | null
    userId: string | null
    action: $Enums.Action | null
    designation: $Enums.Designation | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsEditLogMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    teamId: string | null
    userId: string | null
    action: $Enums.Action | null
    designation: $Enums.Designation | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsEditLogCountAggregateOutputType = {
    id: number
    requestId: number
    teamId: number
    userId: number
    action: number
    designation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamsEditLogMinAggregateInputType = {
    id?: true
    requestId?: true
    teamId?: true
    userId?: true
    action?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsEditLogMaxAggregateInputType = {
    id?: true
    requestId?: true
    teamId?: true
    userId?: true
    action?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsEditLogCountAggregateInputType = {
    id?: true
    requestId?: true
    teamId?: true
    userId?: true
    action?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamsEditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsEditLog to aggregate.
     */
    where?: TeamsEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsEditLogs to fetch.
     */
    orderBy?: TeamsEditLogOrderByWithRelationInput | TeamsEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsEditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamsEditLogs
    **/
    _count?: true | TeamsEditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsEditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsEditLogMaxAggregateInputType
  }

  export type GetTeamsEditLogAggregateType<T extends TeamsEditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamsEditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamsEditLog[P]>
      : GetScalarType<T[P], AggregateTeamsEditLog[P]>
  }




  export type TeamsEditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsEditLogWhereInput
    orderBy?: TeamsEditLogOrderByWithAggregationInput | TeamsEditLogOrderByWithAggregationInput[]
    by: TeamsEditLogScalarFieldEnum[] | TeamsEditLogScalarFieldEnum
    having?: TeamsEditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsEditLogCountAggregateInputType | true
    _min?: TeamsEditLogMinAggregateInputType
    _max?: TeamsEditLogMaxAggregateInputType
  }

  export type TeamsEditLogGroupByOutputType = {
    id: string
    requestId: string | null
    teamId: string
    userId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt: Date
    updatedAt: Date
    _count: TeamsEditLogCountAggregateOutputType | null
    _min: TeamsEditLogMinAggregateOutputType | null
    _max: TeamsEditLogMaxAggregateOutputType | null
  }

  type GetTeamsEditLogGroupByPayload<T extends TeamsEditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsEditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsEditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsEditLogGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsEditLogGroupByOutputType[P]>
        }
      >
    >


  export type TeamsEditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsEditLog"]>

  export type TeamsEditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsEditLog"]>

  export type TeamsEditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsEditLog"]>

  export type TeamsEditLogSelectScalar = {
    id?: boolean
    requestId?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamsEditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "teamId" | "userId" | "action" | "designation" | "createdAt" | "updatedAt", ExtArgs["result"]["teamsEditLog"]>
  export type TeamsEditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamsEditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamsEditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamsEditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamsEditLog"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string | null
      teamId: string
      userId: string
      action: $Enums.Action
      designation: $Enums.Designation
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamsEditLog"]>
    composites: {}
  }

  type TeamsEditLogGetPayload<S extends boolean | null | undefined | TeamsEditLogDefaultArgs> = $Result.GetResult<Prisma.$TeamsEditLogPayload, S>

  type TeamsEditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsEditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsEditLogCountAggregateInputType | true
    }

  export interface TeamsEditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamsEditLog'], meta: { name: 'TeamsEditLog' } }
    /**
     * Find zero or one TeamsEditLog that matches the filter.
     * @param {TeamsEditLogFindUniqueArgs} args - Arguments to find a TeamsEditLog
     * @example
     * // Get one TeamsEditLog
     * const teamsEditLog = await prisma.teamsEditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsEditLogFindUniqueArgs>(args: SelectSubset<T, TeamsEditLogFindUniqueArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamsEditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsEditLogFindUniqueOrThrowArgs} args - Arguments to find a TeamsEditLog
     * @example
     * // Get one TeamsEditLog
     * const teamsEditLog = await prisma.teamsEditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsEditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsEditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsEditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogFindFirstArgs} args - Arguments to find a TeamsEditLog
     * @example
     * // Get one TeamsEditLog
     * const teamsEditLog = await prisma.teamsEditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsEditLogFindFirstArgs>(args?: SelectSubset<T, TeamsEditLogFindFirstArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsEditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogFindFirstOrThrowArgs} args - Arguments to find a TeamsEditLog
     * @example
     * // Get one TeamsEditLog
     * const teamsEditLog = await prisma.teamsEditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsEditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsEditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamsEditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamsEditLogs
     * const teamsEditLogs = await prisma.teamsEditLog.findMany()
     * 
     * // Get first 10 TeamsEditLogs
     * const teamsEditLogs = await prisma.teamsEditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsEditLogWithIdOnly = await prisma.teamsEditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsEditLogFindManyArgs>(args?: SelectSubset<T, TeamsEditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamsEditLog.
     * @param {TeamsEditLogCreateArgs} args - Arguments to create a TeamsEditLog.
     * @example
     * // Create one TeamsEditLog
     * const TeamsEditLog = await prisma.teamsEditLog.create({
     *   data: {
     *     // ... data to create a TeamsEditLog
     *   }
     * })
     * 
     */
    create<T extends TeamsEditLogCreateArgs>(args: SelectSubset<T, TeamsEditLogCreateArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamsEditLogs.
     * @param {TeamsEditLogCreateManyArgs} args - Arguments to create many TeamsEditLogs.
     * @example
     * // Create many TeamsEditLogs
     * const teamsEditLog = await prisma.teamsEditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsEditLogCreateManyArgs>(args?: SelectSubset<T, TeamsEditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamsEditLogs and returns the data saved in the database.
     * @param {TeamsEditLogCreateManyAndReturnArgs} args - Arguments to create many TeamsEditLogs.
     * @example
     * // Create many TeamsEditLogs
     * const teamsEditLog = await prisma.teamsEditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamsEditLogs and only return the `id`
     * const teamsEditLogWithIdOnly = await prisma.teamsEditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsEditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsEditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamsEditLog.
     * @param {TeamsEditLogDeleteArgs} args - Arguments to delete one TeamsEditLog.
     * @example
     * // Delete one TeamsEditLog
     * const TeamsEditLog = await prisma.teamsEditLog.delete({
     *   where: {
     *     // ... filter to delete one TeamsEditLog
     *   }
     * })
     * 
     */
    delete<T extends TeamsEditLogDeleteArgs>(args: SelectSubset<T, TeamsEditLogDeleteArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamsEditLog.
     * @param {TeamsEditLogUpdateArgs} args - Arguments to update one TeamsEditLog.
     * @example
     * // Update one TeamsEditLog
     * const teamsEditLog = await prisma.teamsEditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsEditLogUpdateArgs>(args: SelectSubset<T, TeamsEditLogUpdateArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamsEditLogs.
     * @param {TeamsEditLogDeleteManyArgs} args - Arguments to filter TeamsEditLogs to delete.
     * @example
     * // Delete a few TeamsEditLogs
     * const { count } = await prisma.teamsEditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsEditLogDeleteManyArgs>(args?: SelectSubset<T, TeamsEditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsEditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamsEditLogs
     * const teamsEditLog = await prisma.teamsEditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsEditLogUpdateManyArgs>(args: SelectSubset<T, TeamsEditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsEditLogs and returns the data updated in the database.
     * @param {TeamsEditLogUpdateManyAndReturnArgs} args - Arguments to update many TeamsEditLogs.
     * @example
     * // Update many TeamsEditLogs
     * const teamsEditLog = await prisma.teamsEditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamsEditLogs and only return the `id`
     * const teamsEditLogWithIdOnly = await prisma.teamsEditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamsEditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsEditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamsEditLog.
     * @param {TeamsEditLogUpsertArgs} args - Arguments to update or create a TeamsEditLog.
     * @example
     * // Update or create a TeamsEditLog
     * const teamsEditLog = await prisma.teamsEditLog.upsert({
     *   create: {
     *     // ... data to create a TeamsEditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamsEditLog we want to update
     *   }
     * })
     */
    upsert<T extends TeamsEditLogUpsertArgs>(args: SelectSubset<T, TeamsEditLogUpsertArgs<ExtArgs>>): Prisma__TeamsEditLogClient<$Result.GetResult<Prisma.$TeamsEditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamsEditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogCountArgs} args - Arguments to filter TeamsEditLogs to count.
     * @example
     * // Count the number of TeamsEditLogs
     * const count = await prisma.teamsEditLog.count({
     *   where: {
     *     // ... the filter for the TeamsEditLogs we want to count
     *   }
     * })
    **/
    count<T extends TeamsEditLogCountArgs>(
      args?: Subset<T, TeamsEditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsEditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamsEditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsEditLogAggregateArgs>(args: Subset<T, TeamsEditLogAggregateArgs>): Prisma.PrismaPromise<GetTeamsEditLogAggregateType<T>>

    /**
     * Group by TeamsEditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsEditLogGroupByArgs} args - Group by arguments.
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
      T extends TeamsEditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsEditLogGroupByArgs['orderBy'] }
        : { orderBy?: TeamsEditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsEditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsEditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamsEditLog model
   */
  readonly fields: TeamsEditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamsEditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsEditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamsEditLog model
   */
  interface TeamsEditLogFieldRefs {
    readonly id: FieldRef<"TeamsEditLog", 'String'>
    readonly requestId: FieldRef<"TeamsEditLog", 'String'>
    readonly teamId: FieldRef<"TeamsEditLog", 'String'>
    readonly userId: FieldRef<"TeamsEditLog", 'String'>
    readonly action: FieldRef<"TeamsEditLog", 'Action'>
    readonly designation: FieldRef<"TeamsEditLog", 'Designation'>
    readonly createdAt: FieldRef<"TeamsEditLog", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamsEditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamsEditLog findUnique
   */
  export type TeamsEditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * Filter, which TeamsEditLog to fetch.
     */
    where: TeamsEditLogWhereUniqueInput
  }

  /**
   * TeamsEditLog findUniqueOrThrow
   */
  export type TeamsEditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * Filter, which TeamsEditLog to fetch.
     */
    where: TeamsEditLogWhereUniqueInput
  }

  /**
   * TeamsEditLog findFirst
   */
  export type TeamsEditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * Filter, which TeamsEditLog to fetch.
     */
    where?: TeamsEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsEditLogs to fetch.
     */
    orderBy?: TeamsEditLogOrderByWithRelationInput | TeamsEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsEditLogs.
     */
    cursor?: TeamsEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsEditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsEditLogs.
     */
    distinct?: TeamsEditLogScalarFieldEnum | TeamsEditLogScalarFieldEnum[]
  }

  /**
   * TeamsEditLog findFirstOrThrow
   */
  export type TeamsEditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * Filter, which TeamsEditLog to fetch.
     */
    where?: TeamsEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsEditLogs to fetch.
     */
    orderBy?: TeamsEditLogOrderByWithRelationInput | TeamsEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsEditLogs.
     */
    cursor?: TeamsEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsEditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsEditLogs.
     */
    distinct?: TeamsEditLogScalarFieldEnum | TeamsEditLogScalarFieldEnum[]
  }

  /**
   * TeamsEditLog findMany
   */
  export type TeamsEditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * Filter, which TeamsEditLogs to fetch.
     */
    where?: TeamsEditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsEditLogs to fetch.
     */
    orderBy?: TeamsEditLogOrderByWithRelationInput | TeamsEditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamsEditLogs.
     */
    cursor?: TeamsEditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsEditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsEditLogs.
     */
    skip?: number
    distinct?: TeamsEditLogScalarFieldEnum | TeamsEditLogScalarFieldEnum[]
  }

  /**
   * TeamsEditLog create
   */
  export type TeamsEditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamsEditLog.
     */
    data: XOR<TeamsEditLogCreateInput, TeamsEditLogUncheckedCreateInput>
  }

  /**
   * TeamsEditLog createMany
   */
  export type TeamsEditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamsEditLogs.
     */
    data: TeamsEditLogCreateManyInput | TeamsEditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamsEditLog createManyAndReturn
   */
  export type TeamsEditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * The data used to create many TeamsEditLogs.
     */
    data: TeamsEditLogCreateManyInput | TeamsEditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsEditLog update
   */
  export type TeamsEditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamsEditLog.
     */
    data: XOR<TeamsEditLogUpdateInput, TeamsEditLogUncheckedUpdateInput>
    /**
     * Choose, which TeamsEditLog to update.
     */
    where: TeamsEditLogWhereUniqueInput
  }

  /**
   * TeamsEditLog updateMany
   */
  export type TeamsEditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamsEditLogs.
     */
    data: XOR<TeamsEditLogUpdateManyMutationInput, TeamsEditLogUncheckedUpdateManyInput>
    /**
     * Filter which TeamsEditLogs to update
     */
    where?: TeamsEditLogWhereInput
    /**
     * Limit how many TeamsEditLogs to update.
     */
    limit?: number
  }

  /**
   * TeamsEditLog updateManyAndReturn
   */
  export type TeamsEditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * The data used to update TeamsEditLogs.
     */
    data: XOR<TeamsEditLogUpdateManyMutationInput, TeamsEditLogUncheckedUpdateManyInput>
    /**
     * Filter which TeamsEditLogs to update
     */
    where?: TeamsEditLogWhereInput
    /**
     * Limit how many TeamsEditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsEditLog upsert
   */
  export type TeamsEditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamsEditLog to update in case it exists.
     */
    where: TeamsEditLogWhereUniqueInput
    /**
     * In case the TeamsEditLog found by the `where` argument doesn't exist, create a new TeamsEditLog with this data.
     */
    create: XOR<TeamsEditLogCreateInput, TeamsEditLogUncheckedCreateInput>
    /**
     * In case the TeamsEditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsEditLogUpdateInput, TeamsEditLogUncheckedUpdateInput>
  }

  /**
   * TeamsEditLog delete
   */
  export type TeamsEditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
    /**
     * Filter which TeamsEditLog to delete.
     */
    where: TeamsEditLogWhereUniqueInput
  }

  /**
   * TeamsEditLog deleteMany
   */
  export type TeamsEditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsEditLogs to delete
     */
    where?: TeamsEditLogWhereInput
    /**
     * Limit how many TeamsEditLogs to delete.
     */
    limit?: number
  }

  /**
   * TeamsEditLog without action
   */
  export type TeamsEditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsEditLog
     */
    select?: TeamsEditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsEditLog
     */
    omit?: TeamsEditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsEditLogInclude<ExtArgs> | null
  }


  /**
   * Model ActiveInvitationOrRequest
   */

  export type AggregateActiveInvitationOrRequest = {
    _count: ActiveInvitationOrRequestCountAggregateOutputType | null
    _min: ActiveInvitationOrRequestMinAggregateOutputType | null
    _max: ActiveInvitationOrRequestMaxAggregateOutputType | null
  }

  export type ActiveInvitationOrRequestMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    memberId: string | null
    designation: $Enums.Designation | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActiveInvitationOrRequestMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    memberId: string | null
    designation: $Enums.Designation | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActiveInvitationOrRequestCountAggregateOutputType = {
    id: number
    teamId: number
    memberId: number
    designation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActiveInvitationOrRequestMinAggregateInputType = {
    id?: true
    teamId?: true
    memberId?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActiveInvitationOrRequestMaxAggregateInputType = {
    id?: true
    teamId?: true
    memberId?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActiveInvitationOrRequestCountAggregateInputType = {
    id?: true
    teamId?: true
    memberId?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActiveInvitationOrRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveInvitationOrRequest to aggregate.
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveInvitationOrRequests to fetch.
     */
    orderBy?: ActiveInvitationOrRequestOrderByWithRelationInput | ActiveInvitationOrRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiveInvitationOrRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveInvitationOrRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveInvitationOrRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActiveInvitationOrRequests
    **/
    _count?: true | ActiveInvitationOrRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiveInvitationOrRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiveInvitationOrRequestMaxAggregateInputType
  }

  export type GetActiveInvitationOrRequestAggregateType<T extends ActiveInvitationOrRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateActiveInvitationOrRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActiveInvitationOrRequest[P]>
      : GetScalarType<T[P], AggregateActiveInvitationOrRequest[P]>
  }




  export type ActiveInvitationOrRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveInvitationOrRequestWhereInput
    orderBy?: ActiveInvitationOrRequestOrderByWithAggregationInput | ActiveInvitationOrRequestOrderByWithAggregationInput[]
    by: ActiveInvitationOrRequestScalarFieldEnum[] | ActiveInvitationOrRequestScalarFieldEnum
    having?: ActiveInvitationOrRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiveInvitationOrRequestCountAggregateInputType | true
    _min?: ActiveInvitationOrRequestMinAggregateInputType
    _max?: ActiveInvitationOrRequestMaxAggregateInputType
  }

  export type ActiveInvitationOrRequestGroupByOutputType = {
    id: string
    teamId: string
    memberId: string
    designation: $Enums.Designation
    createdAt: Date
    updatedAt: Date
    _count: ActiveInvitationOrRequestCountAggregateOutputType | null
    _min: ActiveInvitationOrRequestMinAggregateOutputType | null
    _max: ActiveInvitationOrRequestMaxAggregateOutputType | null
  }

  type GetActiveInvitationOrRequestGroupByPayload<T extends ActiveInvitationOrRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiveInvitationOrRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiveInvitationOrRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiveInvitationOrRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ActiveInvitationOrRequestGroupByOutputType[P]>
        }
      >
    >


  export type ActiveInvitationOrRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    memberId?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeInvitationOrRequest"]>

  export type ActiveInvitationOrRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    memberId?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeInvitationOrRequest"]>

  export type ActiveInvitationOrRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    memberId?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeInvitationOrRequest"]>

  export type ActiveInvitationOrRequestSelectScalar = {
    id?: boolean
    teamId?: boolean
    memberId?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActiveInvitationOrRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "memberId" | "designation" | "createdAt" | "updatedAt", ExtArgs["result"]["activeInvitationOrRequest"]>
  export type ActiveInvitationOrRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActiveInvitationOrRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActiveInvitationOrRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActiveInvitationOrRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActiveInvitationOrRequest"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      member: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      memberId: string
      designation: $Enums.Designation
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activeInvitationOrRequest"]>
    composites: {}
  }

  type ActiveInvitationOrRequestGetPayload<S extends boolean | null | undefined | ActiveInvitationOrRequestDefaultArgs> = $Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload, S>

  type ActiveInvitationOrRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiveInvitationOrRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiveInvitationOrRequestCountAggregateInputType | true
    }

  export interface ActiveInvitationOrRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActiveInvitationOrRequest'], meta: { name: 'ActiveInvitationOrRequest' } }
    /**
     * Find zero or one ActiveInvitationOrRequest that matches the filter.
     * @param {ActiveInvitationOrRequestFindUniqueArgs} args - Arguments to find a ActiveInvitationOrRequest
     * @example
     * // Get one ActiveInvitationOrRequest
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveInvitationOrRequestFindUniqueArgs>(args: SelectSubset<T, ActiveInvitationOrRequestFindUniqueArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActiveInvitationOrRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiveInvitationOrRequestFindUniqueOrThrowArgs} args - Arguments to find a ActiveInvitationOrRequest
     * @example
     * // Get one ActiveInvitationOrRequest
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveInvitationOrRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiveInvitationOrRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveInvitationOrRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestFindFirstArgs} args - Arguments to find a ActiveInvitationOrRequest
     * @example
     * // Get one ActiveInvitationOrRequest
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveInvitationOrRequestFindFirstArgs>(args?: SelectSubset<T, ActiveInvitationOrRequestFindFirstArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveInvitationOrRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestFindFirstOrThrowArgs} args - Arguments to find a ActiveInvitationOrRequest
     * @example
     * // Get one ActiveInvitationOrRequest
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveInvitationOrRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiveInvitationOrRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActiveInvitationOrRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveInvitationOrRequests
     * const activeInvitationOrRequests = await prisma.activeInvitationOrRequest.findMany()
     * 
     * // Get first 10 ActiveInvitationOrRequests
     * const activeInvitationOrRequests = await prisma.activeInvitationOrRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activeInvitationOrRequestWithIdOnly = await prisma.activeInvitationOrRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActiveInvitationOrRequestFindManyArgs>(args?: SelectSubset<T, ActiveInvitationOrRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActiveInvitationOrRequest.
     * @param {ActiveInvitationOrRequestCreateArgs} args - Arguments to create a ActiveInvitationOrRequest.
     * @example
     * // Create one ActiveInvitationOrRequest
     * const ActiveInvitationOrRequest = await prisma.activeInvitationOrRequest.create({
     *   data: {
     *     // ... data to create a ActiveInvitationOrRequest
     *   }
     * })
     * 
     */
    create<T extends ActiveInvitationOrRequestCreateArgs>(args: SelectSubset<T, ActiveInvitationOrRequestCreateArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActiveInvitationOrRequests.
     * @param {ActiveInvitationOrRequestCreateManyArgs} args - Arguments to create many ActiveInvitationOrRequests.
     * @example
     * // Create many ActiveInvitationOrRequests
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiveInvitationOrRequestCreateManyArgs>(args?: SelectSubset<T, ActiveInvitationOrRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActiveInvitationOrRequests and returns the data saved in the database.
     * @param {ActiveInvitationOrRequestCreateManyAndReturnArgs} args - Arguments to create many ActiveInvitationOrRequests.
     * @example
     * // Create many ActiveInvitationOrRequests
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActiveInvitationOrRequests and only return the `id`
     * const activeInvitationOrRequestWithIdOnly = await prisma.activeInvitationOrRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiveInvitationOrRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiveInvitationOrRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActiveInvitationOrRequest.
     * @param {ActiveInvitationOrRequestDeleteArgs} args - Arguments to delete one ActiveInvitationOrRequest.
     * @example
     * // Delete one ActiveInvitationOrRequest
     * const ActiveInvitationOrRequest = await prisma.activeInvitationOrRequest.delete({
     *   where: {
     *     // ... filter to delete one ActiveInvitationOrRequest
     *   }
     * })
     * 
     */
    delete<T extends ActiveInvitationOrRequestDeleteArgs>(args: SelectSubset<T, ActiveInvitationOrRequestDeleteArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActiveInvitationOrRequest.
     * @param {ActiveInvitationOrRequestUpdateArgs} args - Arguments to update one ActiveInvitationOrRequest.
     * @example
     * // Update one ActiveInvitationOrRequest
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiveInvitationOrRequestUpdateArgs>(args: SelectSubset<T, ActiveInvitationOrRequestUpdateArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActiveInvitationOrRequests.
     * @param {ActiveInvitationOrRequestDeleteManyArgs} args - Arguments to filter ActiveInvitationOrRequests to delete.
     * @example
     * // Delete a few ActiveInvitationOrRequests
     * const { count } = await prisma.activeInvitationOrRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiveInvitationOrRequestDeleteManyArgs>(args?: SelectSubset<T, ActiveInvitationOrRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveInvitationOrRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveInvitationOrRequests
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiveInvitationOrRequestUpdateManyArgs>(args: SelectSubset<T, ActiveInvitationOrRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveInvitationOrRequests and returns the data updated in the database.
     * @param {ActiveInvitationOrRequestUpdateManyAndReturnArgs} args - Arguments to update many ActiveInvitationOrRequests.
     * @example
     * // Update many ActiveInvitationOrRequests
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActiveInvitationOrRequests and only return the `id`
     * const activeInvitationOrRequestWithIdOnly = await prisma.activeInvitationOrRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActiveInvitationOrRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ActiveInvitationOrRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActiveInvitationOrRequest.
     * @param {ActiveInvitationOrRequestUpsertArgs} args - Arguments to update or create a ActiveInvitationOrRequest.
     * @example
     * // Update or create a ActiveInvitationOrRequest
     * const activeInvitationOrRequest = await prisma.activeInvitationOrRequest.upsert({
     *   create: {
     *     // ... data to create a ActiveInvitationOrRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveInvitationOrRequest we want to update
     *   }
     * })
     */
    upsert<T extends ActiveInvitationOrRequestUpsertArgs>(args: SelectSubset<T, ActiveInvitationOrRequestUpsertArgs<ExtArgs>>): Prisma__ActiveInvitationOrRequestClient<$Result.GetResult<Prisma.$ActiveInvitationOrRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActiveInvitationOrRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestCountArgs} args - Arguments to filter ActiveInvitationOrRequests to count.
     * @example
     * // Count the number of ActiveInvitationOrRequests
     * const count = await prisma.activeInvitationOrRequest.count({
     *   where: {
     *     // ... the filter for the ActiveInvitationOrRequests we want to count
     *   }
     * })
    **/
    count<T extends ActiveInvitationOrRequestCountArgs>(
      args?: Subset<T, ActiveInvitationOrRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiveInvitationOrRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActiveInvitationOrRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActiveInvitationOrRequestAggregateArgs>(args: Subset<T, ActiveInvitationOrRequestAggregateArgs>): Prisma.PrismaPromise<GetActiveInvitationOrRequestAggregateType<T>>

    /**
     * Group by ActiveInvitationOrRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveInvitationOrRequestGroupByArgs} args - Group by arguments.
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
      T extends ActiveInvitationOrRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiveInvitationOrRequestGroupByArgs['orderBy'] }
        : { orderBy?: ActiveInvitationOrRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActiveInvitationOrRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveInvitationOrRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActiveInvitationOrRequest model
   */
  readonly fields: ActiveInvitationOrRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActiveInvitationOrRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiveInvitationOrRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActiveInvitationOrRequest model
   */
  interface ActiveInvitationOrRequestFieldRefs {
    readonly id: FieldRef<"ActiveInvitationOrRequest", 'String'>
    readonly teamId: FieldRef<"ActiveInvitationOrRequest", 'String'>
    readonly memberId: FieldRef<"ActiveInvitationOrRequest", 'String'>
    readonly designation: FieldRef<"ActiveInvitationOrRequest", 'Designation'>
    readonly createdAt: FieldRef<"ActiveInvitationOrRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ActiveInvitationOrRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActiveInvitationOrRequest findUnique
   */
  export type ActiveInvitationOrRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActiveInvitationOrRequest to fetch.
     */
    where: ActiveInvitationOrRequestWhereUniqueInput
  }

  /**
   * ActiveInvitationOrRequest findUniqueOrThrow
   */
  export type ActiveInvitationOrRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActiveInvitationOrRequest to fetch.
     */
    where: ActiveInvitationOrRequestWhereUniqueInput
  }

  /**
   * ActiveInvitationOrRequest findFirst
   */
  export type ActiveInvitationOrRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActiveInvitationOrRequest to fetch.
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveInvitationOrRequests to fetch.
     */
    orderBy?: ActiveInvitationOrRequestOrderByWithRelationInput | ActiveInvitationOrRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveInvitationOrRequests.
     */
    cursor?: ActiveInvitationOrRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveInvitationOrRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveInvitationOrRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveInvitationOrRequests.
     */
    distinct?: ActiveInvitationOrRequestScalarFieldEnum | ActiveInvitationOrRequestScalarFieldEnum[]
  }

  /**
   * ActiveInvitationOrRequest findFirstOrThrow
   */
  export type ActiveInvitationOrRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActiveInvitationOrRequest to fetch.
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveInvitationOrRequests to fetch.
     */
    orderBy?: ActiveInvitationOrRequestOrderByWithRelationInput | ActiveInvitationOrRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveInvitationOrRequests.
     */
    cursor?: ActiveInvitationOrRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveInvitationOrRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveInvitationOrRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveInvitationOrRequests.
     */
    distinct?: ActiveInvitationOrRequestScalarFieldEnum | ActiveInvitationOrRequestScalarFieldEnum[]
  }

  /**
   * ActiveInvitationOrRequest findMany
   */
  export type ActiveInvitationOrRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActiveInvitationOrRequests to fetch.
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveInvitationOrRequests to fetch.
     */
    orderBy?: ActiveInvitationOrRequestOrderByWithRelationInput | ActiveInvitationOrRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActiveInvitationOrRequests.
     */
    cursor?: ActiveInvitationOrRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveInvitationOrRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveInvitationOrRequests.
     */
    skip?: number
    distinct?: ActiveInvitationOrRequestScalarFieldEnum | ActiveInvitationOrRequestScalarFieldEnum[]
  }

  /**
   * ActiveInvitationOrRequest create
   */
  export type ActiveInvitationOrRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ActiveInvitationOrRequest.
     */
    data: XOR<ActiveInvitationOrRequestCreateInput, ActiveInvitationOrRequestUncheckedCreateInput>
  }

  /**
   * ActiveInvitationOrRequest createMany
   */
  export type ActiveInvitationOrRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveInvitationOrRequests.
     */
    data: ActiveInvitationOrRequestCreateManyInput | ActiveInvitationOrRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveInvitationOrRequest createManyAndReturn
   */
  export type ActiveInvitationOrRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ActiveInvitationOrRequests.
     */
    data: ActiveInvitationOrRequestCreateManyInput | ActiveInvitationOrRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActiveInvitationOrRequest update
   */
  export type ActiveInvitationOrRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ActiveInvitationOrRequest.
     */
    data: XOR<ActiveInvitationOrRequestUpdateInput, ActiveInvitationOrRequestUncheckedUpdateInput>
    /**
     * Choose, which ActiveInvitationOrRequest to update.
     */
    where: ActiveInvitationOrRequestWhereUniqueInput
  }

  /**
   * ActiveInvitationOrRequest updateMany
   */
  export type ActiveInvitationOrRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveInvitationOrRequests.
     */
    data: XOR<ActiveInvitationOrRequestUpdateManyMutationInput, ActiveInvitationOrRequestUncheckedUpdateManyInput>
    /**
     * Filter which ActiveInvitationOrRequests to update
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * Limit how many ActiveInvitationOrRequests to update.
     */
    limit?: number
  }

  /**
   * ActiveInvitationOrRequest updateManyAndReturn
   */
  export type ActiveInvitationOrRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * The data used to update ActiveInvitationOrRequests.
     */
    data: XOR<ActiveInvitationOrRequestUpdateManyMutationInput, ActiveInvitationOrRequestUncheckedUpdateManyInput>
    /**
     * Filter which ActiveInvitationOrRequests to update
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * Limit how many ActiveInvitationOrRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActiveInvitationOrRequest upsert
   */
  export type ActiveInvitationOrRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ActiveInvitationOrRequest to update in case it exists.
     */
    where: ActiveInvitationOrRequestWhereUniqueInput
    /**
     * In case the ActiveInvitationOrRequest found by the `where` argument doesn't exist, create a new ActiveInvitationOrRequest with this data.
     */
    create: XOR<ActiveInvitationOrRequestCreateInput, ActiveInvitationOrRequestUncheckedCreateInput>
    /**
     * In case the ActiveInvitationOrRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiveInvitationOrRequestUpdateInput, ActiveInvitationOrRequestUncheckedUpdateInput>
  }

  /**
   * ActiveInvitationOrRequest delete
   */
  export type ActiveInvitationOrRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
    /**
     * Filter which ActiveInvitationOrRequest to delete.
     */
    where: ActiveInvitationOrRequestWhereUniqueInput
  }

  /**
   * ActiveInvitationOrRequest deleteMany
   */
  export type ActiveInvitationOrRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveInvitationOrRequests to delete
     */
    where?: ActiveInvitationOrRequestWhereInput
    /**
     * Limit how many ActiveInvitationOrRequests to delete.
     */
    limit?: number
  }

  /**
   * ActiveInvitationOrRequest without action
   */
  export type ActiveInvitationOrRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveInvitationOrRequest
     */
    select?: ActiveInvitationOrRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveInvitationOrRequest
     */
    omit?: ActiveInvitationOrRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveInvitationOrRequestInclude<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdById: string | null
    teamId: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdById: string | null
    teamId: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdById: number
    teamId: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoticeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdById?: true
    teamId?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdById?: true
    teamId?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdById?: true
    teamId?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: string
    title: string
    content: string
    createdById: string
    teamId: string
    startDate: Date
    endDate: Date
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdById?: boolean
    teamId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    history?: boolean | Notice$historyArgs<ExtArgs>
    _count?: boolean | NoticeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdById?: boolean
    teamId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdById?: boolean
    teamId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdById?: boolean
    teamId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdById" | "teamId" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["notice"]>
  export type NoticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    history?: boolean | Notice$historyArgs<ExtArgs>
    _count?: boolean | NoticeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoticeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type NoticeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
      history: Prisma.$NoticeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdById: string
      teamId: string
      startDate: Date
      endDate: Date
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticeCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices and returns the data updated in the database.
     * @param {NoticeUpdateManyAndReturnArgs} args - Arguments to update many Notices.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoticeUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
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
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Notice$historyArgs<ExtArgs> = {}>(args?: Subset<T, Notice$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'String'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly content: FieldRef<"Notice", 'String'>
    readonly createdById: FieldRef<"Notice", 'String'>
    readonly teamId: FieldRef<"Notice", 'String'>
    readonly startDate: FieldRef<"Notice", 'DateTime'>
    readonly endDate: FieldRef<"Notice", 'DateTime'>
    readonly status: FieldRef<"Notice", 'Status'>
    readonly createdAt: FieldRef<"Notice", 'DateTime'>
    readonly updatedAt: FieldRef<"Notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice createManyAndReturn
   */
  export type NoticeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice updateManyAndReturn
   */
  export type NoticeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notice.history
   */
  export type Notice$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    where?: NoticeHistoryWhereInput
    orderBy?: NoticeHistoryOrderByWithRelationInput | NoticeHistoryOrderByWithRelationInput[]
    cursor?: NoticeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeHistoryScalarFieldEnum | NoticeHistoryScalarFieldEnum[]
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
  }


  /**
   * Model NoticeHistory
   */

  export type AggregateNoticeHistory = {
    _count: NoticeHistoryCountAggregateOutputType | null
    _min: NoticeHistoryMinAggregateOutputType | null
    _max: NoticeHistoryMaxAggregateOutputType | null
  }

  export type NoticeHistoryMinAggregateOutputType = {
    id: string | null
    noticeId: string | null
    title: string | null
    content: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    createdById: string | null
    createdAt: Date | null
  }

  export type NoticeHistoryMaxAggregateOutputType = {
    id: string | null
    noticeId: string | null
    title: string | null
    content: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    createdById: string | null
    createdAt: Date | null
  }

  export type NoticeHistoryCountAggregateOutputType = {
    id: number
    noticeId: number
    title: number
    content: number
    startDate: number
    endDate: number
    status: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type NoticeHistoryMinAggregateInputType = {
    id?: true
    noticeId?: true
    title?: true
    content?: true
    startDate?: true
    endDate?: true
    status?: true
    createdById?: true
    createdAt?: true
  }

  export type NoticeHistoryMaxAggregateInputType = {
    id?: true
    noticeId?: true
    title?: true
    content?: true
    startDate?: true
    endDate?: true
    status?: true
    createdById?: true
    createdAt?: true
  }

  export type NoticeHistoryCountAggregateInputType = {
    id?: true
    noticeId?: true
    title?: true
    content?: true
    startDate?: true
    endDate?: true
    status?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type NoticeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoticeHistory to aggregate.
     */
    where?: NoticeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeHistories to fetch.
     */
    orderBy?: NoticeHistoryOrderByWithRelationInput | NoticeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoticeHistories
    **/
    _count?: true | NoticeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeHistoryMaxAggregateInputType
  }

  export type GetNoticeHistoryAggregateType<T extends NoticeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticeHistory[P]>
      : GetScalarType<T[P], AggregateNoticeHistory[P]>
  }




  export type NoticeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeHistoryWhereInput
    orderBy?: NoticeHistoryOrderByWithAggregationInput | NoticeHistoryOrderByWithAggregationInput[]
    by: NoticeHistoryScalarFieldEnum[] | NoticeHistoryScalarFieldEnum
    having?: NoticeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeHistoryCountAggregateInputType | true
    _min?: NoticeHistoryMinAggregateInputType
    _max?: NoticeHistoryMaxAggregateInputType
  }

  export type NoticeHistoryGroupByOutputType = {
    id: string
    noticeId: string
    title: string
    content: string
    startDate: Date
    endDate: Date
    status: $Enums.Status
    createdById: string
    createdAt: Date
    _count: NoticeHistoryCountAggregateOutputType | null
    _min: NoticeHistoryMinAggregateOutputType | null
    _max: NoticeHistoryMaxAggregateOutputType | null
  }

  type GetNoticeHistoryGroupByPayload<T extends NoticeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type NoticeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noticeId?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    notice?: boolean | NoticeDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticeHistory"]>

  export type NoticeHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noticeId?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    notice?: boolean | NoticeDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticeHistory"]>

  export type NoticeHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noticeId?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    notice?: boolean | NoticeDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticeHistory"]>

  export type NoticeHistorySelectScalar = {
    id?: boolean
    noticeId?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type NoticeHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noticeId" | "title" | "content" | "startDate" | "endDate" | "status" | "createdById" | "createdAt", ExtArgs["result"]["noticeHistory"]>
  export type NoticeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notice?: boolean | NoticeDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoticeHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notice?: boolean | NoticeDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoticeHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notice?: boolean | NoticeDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NoticeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoticeHistory"
    objects: {
      notice: Prisma.$NoticePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noticeId: string
      title: string
      content: string
      startDate: Date
      endDate: Date
      status: $Enums.Status
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["noticeHistory"]>
    composites: {}
  }

  type NoticeHistoryGetPayload<S extends boolean | null | undefined | NoticeHistoryDefaultArgs> = $Result.GetResult<Prisma.$NoticeHistoryPayload, S>

  type NoticeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeHistoryCountAggregateInputType | true
    }

  export interface NoticeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoticeHistory'], meta: { name: 'NoticeHistory' } }
    /**
     * Find zero or one NoticeHistory that matches the filter.
     * @param {NoticeHistoryFindUniqueArgs} args - Arguments to find a NoticeHistory
     * @example
     * // Get one NoticeHistory
     * const noticeHistory = await prisma.noticeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeHistoryFindUniqueArgs>(args: SelectSubset<T, NoticeHistoryFindUniqueArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoticeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeHistoryFindUniqueOrThrowArgs} args - Arguments to find a NoticeHistory
     * @example
     * // Get one NoticeHistory
     * const noticeHistory = await prisma.noticeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoticeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryFindFirstArgs} args - Arguments to find a NoticeHistory
     * @example
     * // Get one NoticeHistory
     * const noticeHistory = await prisma.noticeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeHistoryFindFirstArgs>(args?: SelectSubset<T, NoticeHistoryFindFirstArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoticeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryFindFirstOrThrowArgs} args - Arguments to find a NoticeHistory
     * @example
     * // Get one NoticeHistory
     * const noticeHistory = await prisma.noticeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoticeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoticeHistories
     * const noticeHistories = await prisma.noticeHistory.findMany()
     * 
     * // Get first 10 NoticeHistories
     * const noticeHistories = await prisma.noticeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeHistoryWithIdOnly = await prisma.noticeHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeHistoryFindManyArgs>(args?: SelectSubset<T, NoticeHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoticeHistory.
     * @param {NoticeHistoryCreateArgs} args - Arguments to create a NoticeHistory.
     * @example
     * // Create one NoticeHistory
     * const NoticeHistory = await prisma.noticeHistory.create({
     *   data: {
     *     // ... data to create a NoticeHistory
     *   }
     * })
     * 
     */
    create<T extends NoticeHistoryCreateArgs>(args: SelectSubset<T, NoticeHistoryCreateArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoticeHistories.
     * @param {NoticeHistoryCreateManyArgs} args - Arguments to create many NoticeHistories.
     * @example
     * // Create many NoticeHistories
     * const noticeHistory = await prisma.noticeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeHistoryCreateManyArgs>(args?: SelectSubset<T, NoticeHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoticeHistories and returns the data saved in the database.
     * @param {NoticeHistoryCreateManyAndReturnArgs} args - Arguments to create many NoticeHistories.
     * @example
     * // Create many NoticeHistories
     * const noticeHistory = await prisma.noticeHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoticeHistories and only return the `id`
     * const noticeHistoryWithIdOnly = await prisma.noticeHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoticeHistory.
     * @param {NoticeHistoryDeleteArgs} args - Arguments to delete one NoticeHistory.
     * @example
     * // Delete one NoticeHistory
     * const NoticeHistory = await prisma.noticeHistory.delete({
     *   where: {
     *     // ... filter to delete one NoticeHistory
     *   }
     * })
     * 
     */
    delete<T extends NoticeHistoryDeleteArgs>(args: SelectSubset<T, NoticeHistoryDeleteArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoticeHistory.
     * @param {NoticeHistoryUpdateArgs} args - Arguments to update one NoticeHistory.
     * @example
     * // Update one NoticeHistory
     * const noticeHistory = await prisma.noticeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeHistoryUpdateArgs>(args: SelectSubset<T, NoticeHistoryUpdateArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoticeHistories.
     * @param {NoticeHistoryDeleteManyArgs} args - Arguments to filter NoticeHistories to delete.
     * @example
     * // Delete a few NoticeHistories
     * const { count } = await prisma.noticeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeHistoryDeleteManyArgs>(args?: SelectSubset<T, NoticeHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoticeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoticeHistories
     * const noticeHistory = await prisma.noticeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeHistoryUpdateManyArgs>(args: SelectSubset<T, NoticeHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoticeHistories and returns the data updated in the database.
     * @param {NoticeHistoryUpdateManyAndReturnArgs} args - Arguments to update many NoticeHistories.
     * @example
     * // Update many NoticeHistories
     * const noticeHistory = await prisma.noticeHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoticeHistories and only return the `id`
     * const noticeHistoryWithIdOnly = await prisma.noticeHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoticeHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticeHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoticeHistory.
     * @param {NoticeHistoryUpsertArgs} args - Arguments to update or create a NoticeHistory.
     * @example
     * // Update or create a NoticeHistory
     * const noticeHistory = await prisma.noticeHistory.upsert({
     *   create: {
     *     // ... data to create a NoticeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoticeHistory we want to update
     *   }
     * })
     */
    upsert<T extends NoticeHistoryUpsertArgs>(args: SelectSubset<T, NoticeHistoryUpsertArgs<ExtArgs>>): Prisma__NoticeHistoryClient<$Result.GetResult<Prisma.$NoticeHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoticeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryCountArgs} args - Arguments to filter NoticeHistories to count.
     * @example
     * // Count the number of NoticeHistories
     * const count = await prisma.noticeHistory.count({
     *   where: {
     *     // ... the filter for the NoticeHistories we want to count
     *   }
     * })
    **/
    count<T extends NoticeHistoryCountArgs>(
      args?: Subset<T, NoticeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoticeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeHistoryAggregateArgs>(args: Subset<T, NoticeHistoryAggregateArgs>): Prisma.PrismaPromise<GetNoticeHistoryAggregateType<T>>

    /**
     * Group by NoticeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeHistoryGroupByArgs} args - Group by arguments.
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
      T extends NoticeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: NoticeHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoticeHistory model
   */
  readonly fields: NoticeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoticeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notice<T extends NoticeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoticeDefaultArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoticeHistory model
   */
  interface NoticeHistoryFieldRefs {
    readonly id: FieldRef<"NoticeHistory", 'String'>
    readonly noticeId: FieldRef<"NoticeHistory", 'String'>
    readonly title: FieldRef<"NoticeHistory", 'String'>
    readonly content: FieldRef<"NoticeHistory", 'String'>
    readonly startDate: FieldRef<"NoticeHistory", 'DateTime'>
    readonly endDate: FieldRef<"NoticeHistory", 'DateTime'>
    readonly status: FieldRef<"NoticeHistory", 'Status'>
    readonly createdById: FieldRef<"NoticeHistory", 'String'>
    readonly createdAt: FieldRef<"NoticeHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NoticeHistory findUnique
   */
  export type NoticeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoticeHistory to fetch.
     */
    where: NoticeHistoryWhereUniqueInput
  }

  /**
   * NoticeHistory findUniqueOrThrow
   */
  export type NoticeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoticeHistory to fetch.
     */
    where: NoticeHistoryWhereUniqueInput
  }

  /**
   * NoticeHistory findFirst
   */
  export type NoticeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoticeHistory to fetch.
     */
    where?: NoticeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeHistories to fetch.
     */
    orderBy?: NoticeHistoryOrderByWithRelationInput | NoticeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoticeHistories.
     */
    cursor?: NoticeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoticeHistories.
     */
    distinct?: NoticeHistoryScalarFieldEnum | NoticeHistoryScalarFieldEnum[]
  }

  /**
   * NoticeHistory findFirstOrThrow
   */
  export type NoticeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoticeHistory to fetch.
     */
    where?: NoticeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeHistories to fetch.
     */
    orderBy?: NoticeHistoryOrderByWithRelationInput | NoticeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoticeHistories.
     */
    cursor?: NoticeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoticeHistories.
     */
    distinct?: NoticeHistoryScalarFieldEnum | NoticeHistoryScalarFieldEnum[]
  }

  /**
   * NoticeHistory findMany
   */
  export type NoticeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoticeHistories to fetch.
     */
    where?: NoticeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeHistories to fetch.
     */
    orderBy?: NoticeHistoryOrderByWithRelationInput | NoticeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoticeHistories.
     */
    cursor?: NoticeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeHistories.
     */
    skip?: number
    distinct?: NoticeHistoryScalarFieldEnum | NoticeHistoryScalarFieldEnum[]
  }

  /**
   * NoticeHistory create
   */
  export type NoticeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NoticeHistory.
     */
    data: XOR<NoticeHistoryCreateInput, NoticeHistoryUncheckedCreateInput>
  }

  /**
   * NoticeHistory createMany
   */
  export type NoticeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoticeHistories.
     */
    data: NoticeHistoryCreateManyInput | NoticeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoticeHistory createManyAndReturn
   */
  export type NoticeHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many NoticeHistories.
     */
    data: NoticeHistoryCreateManyInput | NoticeHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoticeHistory update
   */
  export type NoticeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NoticeHistory.
     */
    data: XOR<NoticeHistoryUpdateInput, NoticeHistoryUncheckedUpdateInput>
    /**
     * Choose, which NoticeHistory to update.
     */
    where: NoticeHistoryWhereUniqueInput
  }

  /**
   * NoticeHistory updateMany
   */
  export type NoticeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoticeHistories.
     */
    data: XOR<NoticeHistoryUpdateManyMutationInput, NoticeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NoticeHistories to update
     */
    where?: NoticeHistoryWhereInput
    /**
     * Limit how many NoticeHistories to update.
     */
    limit?: number
  }

  /**
   * NoticeHistory updateManyAndReturn
   */
  export type NoticeHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * The data used to update NoticeHistories.
     */
    data: XOR<NoticeHistoryUpdateManyMutationInput, NoticeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NoticeHistories to update
     */
    where?: NoticeHistoryWhereInput
    /**
     * Limit how many NoticeHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoticeHistory upsert
   */
  export type NoticeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NoticeHistory to update in case it exists.
     */
    where: NoticeHistoryWhereUniqueInput
    /**
     * In case the NoticeHistory found by the `where` argument doesn't exist, create a new NoticeHistory with this data.
     */
    create: XOR<NoticeHistoryCreateInput, NoticeHistoryUncheckedCreateInput>
    /**
     * In case the NoticeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeHistoryUpdateInput, NoticeHistoryUncheckedUpdateInput>
  }

  /**
   * NoticeHistory delete
   */
  export type NoticeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
    /**
     * Filter which NoticeHistory to delete.
     */
    where: NoticeHistoryWhereUniqueInput
  }

  /**
   * NoticeHistory deleteMany
   */
  export type NoticeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoticeHistories to delete
     */
    where?: NoticeHistoryWhereInput
    /**
     * Limit how many NoticeHistories to delete.
     */
    limit?: number
  }

  /**
   * NoticeHistory without action
   */
  export type NoticeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeHistory
     */
    select?: NoticeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticeHistory
     */
    omit?: NoticeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    title: string | null
    about: string | null
    teamId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    title: string | null
    about: string | null
    teamId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    title: number
    about: number
    teamId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    title?: true
    about?: true
    teamId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    title?: true
    about?: true
    teamId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    title?: true
    about?: true
    teamId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    title: string
    about: string
    teamId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    about?: boolean
    teamId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    about?: boolean
    teamId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    about?: boolean
    teamId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    title?: boolean
    about?: boolean
    teamId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "about" | "teamId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    members?: boolean | Chat$membersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      about: string
      teamId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Chat$membersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly title: FieldRef<"Chat", 'String'>
    readonly about: FieldRef<"Chat", 'String'>
    readonly teamId: FieldRef<"Chat", 'String'>
    readonly isActive: FieldRef<"Chat", 'Boolean'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat.members
   */
  export type Chat$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chatId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chatId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    userId: number
    chatId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    userId: string
    chatId: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    userId?: boolean
    chatId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatId" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chatId: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
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


  export const ImportCSVScalarFieldEnum: {
    id: 'id',
    email: 'email',
    mobileNumber: 'mobileNumber',
    courseName: 'courseName'
  };

  export type ImportCSVScalarFieldEnum = (typeof ImportCSVScalarFieldEnum)[keyof typeof ImportCSVScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobileNumber: 'mobileNumber',
    username: 'username',
    password: 'password',
    courseName: 'courseName',
    about: 'about',
    role: 'role',
    isTeamLeader: 'isTeamLeader',
    isActive: 'isActive',
    twitter: 'twitter',
    github: 'github',
    linkedIn: 'linkedIn',
    hashnode: 'hashnode',
    peerlist: 'peerlist',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    designation: 'designation'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    uniqueTitle: 'uniqueTitle',
    title: 'title',
    about: 'about',
    teamLeaderId: 'teamLeaderId',
    isActive: 'isActive',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const UserRoleInTeamScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    designation: 'designation',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleInTeamScalarFieldEnum = (typeof UserRoleInTeamScalarFieldEnum)[keyof typeof UserRoleInTeamScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TeamsEditLogScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    teamId: 'teamId',
    userId: 'userId',
    action: 'action',
    designation: 'designation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamsEditLogScalarFieldEnum = (typeof TeamsEditLogScalarFieldEnum)[keyof typeof TeamsEditLogScalarFieldEnum]


  export const ActiveInvitationOrRequestScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    memberId: 'memberId',
    designation: 'designation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActiveInvitationOrRequestScalarFieldEnum = (typeof ActiveInvitationOrRequestScalarFieldEnum)[keyof typeof ActiveInvitationOrRequestScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdById: 'createdById',
    teamId: 'teamId',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const NoticeHistoryScalarFieldEnum: {
    id: 'id',
    noticeId: 'noticeId',
    title: 'title',
    content: 'content',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type NoticeHistoryScalarFieldEnum = (typeof NoticeHistoryScalarFieldEnum)[keyof typeof NoticeHistoryScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    title: 'title',
    about: 'about',
    teamId: 'teamId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatId: 'chatId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Designation'
   */
  export type EnumDesignationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Designation'>
    


  /**
   * Reference to a field of type 'Designation[]'
   */
  export type ListEnumDesignationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Designation[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Action'
   */
  export type EnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action'>
    


  /**
   * Reference to a field of type 'Action[]'
   */
  export type ListEnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ImportCSVWhereInput = {
    AND?: ImportCSVWhereInput | ImportCSVWhereInput[]
    OR?: ImportCSVWhereInput[]
    NOT?: ImportCSVWhereInput | ImportCSVWhereInput[]
    id?: StringFilter<"ImportCSV"> | string
    email?: StringFilter<"ImportCSV"> | string
    mobileNumber?: StringFilter<"ImportCSV"> | string
    courseName?: StringNullableListFilter<"ImportCSV">
  }

  export type ImportCSVOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    courseName?: SortOrder
  }

  export type ImportCSVWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_mobileNumber?: ImportCSVEmailMobileNumberCompoundUniqueInput
    AND?: ImportCSVWhereInput | ImportCSVWhereInput[]
    OR?: ImportCSVWhereInput[]
    NOT?: ImportCSVWhereInput | ImportCSVWhereInput[]
    email?: StringFilter<"ImportCSV"> | string
    mobileNumber?: StringFilter<"ImportCSV"> | string
    courseName?: StringNullableListFilter<"ImportCSV">
  }, "id" | "email_mobileNumber">

  export type ImportCSVOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    courseName?: SortOrder
    _count?: ImportCSVCountOrderByAggregateInput
    _max?: ImportCSVMaxOrderByAggregateInput
    _min?: ImportCSVMinOrderByAggregateInput
  }

  export type ImportCSVScalarWhereWithAggregatesInput = {
    AND?: ImportCSVScalarWhereWithAggregatesInput | ImportCSVScalarWhereWithAggregatesInput[]
    OR?: ImportCSVScalarWhereWithAggregatesInput[]
    NOT?: ImportCSVScalarWhereWithAggregatesInput | ImportCSVScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImportCSV"> | string
    email?: StringWithAggregatesFilter<"ImportCSV"> | string
    mobileNumber?: StringWithAggregatesFilter<"ImportCSV"> | string
    courseName?: StringNullableListFilter<"ImportCSV">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    mobileNumber?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    courseName?: StringNullableListFilter<"User">
    about?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isTeamLeader?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    twitter?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    hashnode?: StringNullableFilter<"User"> | string | null
    peerlist?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    designation?: EnumDesignationNullableFilter<"User"> | $Enums.Designation | null
    tags?: TagListRelationFilter
    teamLeaderOf?: TeamsListRelationFilter
    teams?: TeamsListRelationFilter
    ActiveRequests?: ActiveInvitationOrRequestListRelationFilter
    TeamsEditLog?: TeamsEditLogListRelationFilter
    userRoleInTeam?: UserRoleInTeamListRelationFilter
    chats?: ChatListRelationFilter
    messages?: MessageListRelationFilter
    notices?: NoticeListRelationFilter
    noticeHistory?: NoticeHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    username?: SortOrder
    password?: SortOrder
    courseName?: SortOrder
    about?: SortOrder
    role?: SortOrder
    isTeamLeader?: SortOrder
    isActive?: SortOrder
    twitter?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    hashnode?: SortOrderInput | SortOrder
    peerlist?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    designation?: SortOrderInput | SortOrder
    tags?: TagOrderByRelationAggregateInput
    teamLeaderOf?: TeamsOrderByRelationAggregateInput
    teams?: TeamsOrderByRelationAggregateInput
    ActiveRequests?: ActiveInvitationOrRequestOrderByRelationAggregateInput
    TeamsEditLog?: TeamsEditLogOrderByRelationAggregateInput
    userRoleInTeam?: UserRoleInTeamOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    notices?: NoticeOrderByRelationAggregateInput
    noticeHistory?: NoticeHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    mobileNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    courseName?: StringNullableListFilter<"User">
    about?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isTeamLeader?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    twitter?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    hashnode?: StringNullableFilter<"User"> | string | null
    peerlist?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    designation?: EnumDesignationNullableFilter<"User"> | $Enums.Designation | null
    tags?: TagListRelationFilter
    teamLeaderOf?: TeamsListRelationFilter
    teams?: TeamsListRelationFilter
    ActiveRequests?: ActiveInvitationOrRequestListRelationFilter
    TeamsEditLog?: TeamsEditLogListRelationFilter
    userRoleInTeam?: UserRoleInTeamListRelationFilter
    chats?: ChatListRelationFilter
    messages?: MessageListRelationFilter
    notices?: NoticeListRelationFilter
    noticeHistory?: NoticeHistoryListRelationFilter
  }, "userId" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    username?: SortOrder
    password?: SortOrder
    courseName?: SortOrder
    about?: SortOrder
    role?: SortOrder
    isTeamLeader?: SortOrder
    isActive?: SortOrder
    twitter?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    hashnode?: SortOrderInput | SortOrder
    peerlist?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    designation?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    mobileNumber?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    courseName?: StringNullableListFilter<"User">
    about?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isTeamLeader?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    github?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedIn?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashnode?: StringNullableWithAggregatesFilter<"User"> | string | null
    peerlist?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    designation?: EnumDesignationNullableWithAggregatesFilter<"User"> | $Enums.Designation | null
  }

  export type TeamsWhereInput = {
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    id?: StringFilter<"Teams"> | string
    uniqueTitle?: StringFilter<"Teams"> | string
    title?: StringFilter<"Teams"> | string
    about?: StringFilter<"Teams"> | string
    teamLeaderId?: StringFilter<"Teams"> | string
    isActive?: BoolFilter<"Teams"> | boolean
    link?: JsonNullableFilter<"Teams">
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
    teamLeader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    tags?: TagListRelationFilter
    logs?: TeamsEditLogListRelationFilter
    userRoleInTeam?: UserRoleInTeamListRelationFilter
    ActiveRequests?: ActiveInvitationOrRequestListRelationFilter
    chats?: ChatListRelationFilter
    notices?: NoticeListRelationFilter
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    uniqueTitle?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamLeaderId?: SortOrder
    isActive?: SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamLeader?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    logs?: TeamsEditLogOrderByRelationAggregateInput
    userRoleInTeam?: UserRoleInTeamOrderByRelationAggregateInput
    ActiveRequests?: ActiveInvitationOrRequestOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    notices?: NoticeOrderByRelationAggregateInput
  }

  export type TeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueTitle?: string
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    title?: StringFilter<"Teams"> | string
    about?: StringFilter<"Teams"> | string
    teamLeaderId?: StringFilter<"Teams"> | string
    isActive?: BoolFilter<"Teams"> | boolean
    link?: JsonNullableFilter<"Teams">
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
    teamLeader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    tags?: TagListRelationFilter
    logs?: TeamsEditLogListRelationFilter
    userRoleInTeam?: UserRoleInTeamListRelationFilter
    ActiveRequests?: ActiveInvitationOrRequestListRelationFilter
    chats?: ChatListRelationFilter
    notices?: NoticeListRelationFilter
  }, "id" | "uniqueTitle">

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueTitle?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamLeaderId?: SortOrder
    isActive?: SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    OR?: TeamsScalarWhereWithAggregatesInput[]
    NOT?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teams"> | string
    uniqueTitle?: StringWithAggregatesFilter<"Teams"> | string
    title?: StringWithAggregatesFilter<"Teams"> | string
    about?: StringWithAggregatesFilter<"Teams"> | string
    teamLeaderId?: StringWithAggregatesFilter<"Teams"> | string
    isActive?: BoolWithAggregatesFilter<"Teams"> | boolean
    link?: JsonNullableWithAggregatesFilter<"Teams">
    createdAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
  }

  export type UserRoleInTeamWhereInput = {
    AND?: UserRoleInTeamWhereInput | UserRoleInTeamWhereInput[]
    OR?: UserRoleInTeamWhereInput[]
    NOT?: UserRoleInTeamWhereInput | UserRoleInTeamWhereInput[]
    id?: StringFilter<"UserRoleInTeam"> | string
    userId?: StringFilter<"UserRoleInTeam"> | string
    teamId?: StringFilter<"UserRoleInTeam"> | string
    designation?: EnumDesignationFilter<"UserRoleInTeam"> | $Enums.Designation
    isActive?: BoolFilter<"UserRoleInTeam"> | boolean
    createdAt?: DateTimeFilter<"UserRoleInTeam"> | Date | string
    updatedAt?: DateTimeFilter<"UserRoleInTeam"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type UserRoleInTeamOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    designation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
  }

  export type UserRoleInTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRoleInTeamWhereInput | UserRoleInTeamWhereInput[]
    OR?: UserRoleInTeamWhereInput[]
    NOT?: UserRoleInTeamWhereInput | UserRoleInTeamWhereInput[]
    userId?: StringFilter<"UserRoleInTeam"> | string
    teamId?: StringFilter<"UserRoleInTeam"> | string
    designation?: EnumDesignationFilter<"UserRoleInTeam"> | $Enums.Designation
    isActive?: BoolFilter<"UserRoleInTeam"> | boolean
    createdAt?: DateTimeFilter<"UserRoleInTeam"> | Date | string
    updatedAt?: DateTimeFilter<"UserRoleInTeam"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id">

  export type UserRoleInTeamOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    designation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleInTeamCountOrderByAggregateInput
    _max?: UserRoleInTeamMaxOrderByAggregateInput
    _min?: UserRoleInTeamMinOrderByAggregateInput
  }

  export type UserRoleInTeamScalarWhereWithAggregatesInput = {
    AND?: UserRoleInTeamScalarWhereWithAggregatesInput | UserRoleInTeamScalarWhereWithAggregatesInput[]
    OR?: UserRoleInTeamScalarWhereWithAggregatesInput[]
    NOT?: UserRoleInTeamScalarWhereWithAggregatesInput | UserRoleInTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRoleInTeam"> | string
    userId?: StringWithAggregatesFilter<"UserRoleInTeam"> | string
    teamId?: StringWithAggregatesFilter<"UserRoleInTeam"> | string
    designation?: EnumDesignationWithAggregatesFilter<"UserRoleInTeam"> | $Enums.Designation
    isActive?: BoolWithAggregatesFilter<"UserRoleInTeam"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserRoleInTeam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRoleInTeam"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    teams?: TeamsListRelationFilter
    users?: UserListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teams?: TeamsOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    teams?: TeamsListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type TeamsEditLogWhereInput = {
    AND?: TeamsEditLogWhereInput | TeamsEditLogWhereInput[]
    OR?: TeamsEditLogWhereInput[]
    NOT?: TeamsEditLogWhereInput | TeamsEditLogWhereInput[]
    id?: StringFilter<"TeamsEditLog"> | string
    requestId?: StringNullableFilter<"TeamsEditLog"> | string | null
    teamId?: StringFilter<"TeamsEditLog"> | string
    userId?: StringFilter<"TeamsEditLog"> | string
    action?: EnumActionFilter<"TeamsEditLog"> | $Enums.Action
    designation?: EnumDesignationFilter<"TeamsEditLog"> | $Enums.Designation
    createdAt?: DateTimeFilter<"TeamsEditLog"> | Date | string
    updatedAt?: DateTimeFilter<"TeamsEditLog"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamsEditLogOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamsEditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamsEditLogWhereInput | TeamsEditLogWhereInput[]
    OR?: TeamsEditLogWhereInput[]
    NOT?: TeamsEditLogWhereInput | TeamsEditLogWhereInput[]
    requestId?: StringNullableFilter<"TeamsEditLog"> | string | null
    teamId?: StringFilter<"TeamsEditLog"> | string
    userId?: StringFilter<"TeamsEditLog"> | string
    action?: EnumActionFilter<"TeamsEditLog"> | $Enums.Action
    designation?: EnumDesignationFilter<"TeamsEditLog"> | $Enums.Designation
    createdAt?: DateTimeFilter<"TeamsEditLog"> | Date | string
    updatedAt?: DateTimeFilter<"TeamsEditLog"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TeamsEditLogOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamsEditLogCountOrderByAggregateInput
    _max?: TeamsEditLogMaxOrderByAggregateInput
    _min?: TeamsEditLogMinOrderByAggregateInput
  }

  export type TeamsEditLogScalarWhereWithAggregatesInput = {
    AND?: TeamsEditLogScalarWhereWithAggregatesInput | TeamsEditLogScalarWhereWithAggregatesInput[]
    OR?: TeamsEditLogScalarWhereWithAggregatesInput[]
    NOT?: TeamsEditLogScalarWhereWithAggregatesInput | TeamsEditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamsEditLog"> | string
    requestId?: StringNullableWithAggregatesFilter<"TeamsEditLog"> | string | null
    teamId?: StringWithAggregatesFilter<"TeamsEditLog"> | string
    userId?: StringWithAggregatesFilter<"TeamsEditLog"> | string
    action?: EnumActionWithAggregatesFilter<"TeamsEditLog"> | $Enums.Action
    designation?: EnumDesignationWithAggregatesFilter<"TeamsEditLog"> | $Enums.Designation
    createdAt?: DateTimeWithAggregatesFilter<"TeamsEditLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamsEditLog"> | Date | string
  }

  export type ActiveInvitationOrRequestWhereInput = {
    AND?: ActiveInvitationOrRequestWhereInput | ActiveInvitationOrRequestWhereInput[]
    OR?: ActiveInvitationOrRequestWhereInput[]
    NOT?: ActiveInvitationOrRequestWhereInput | ActiveInvitationOrRequestWhereInput[]
    id?: StringFilter<"ActiveInvitationOrRequest"> | string
    teamId?: StringFilter<"ActiveInvitationOrRequest"> | string
    memberId?: StringFilter<"ActiveInvitationOrRequest"> | string
    designation?: EnumDesignationFilter<"ActiveInvitationOrRequest"> | $Enums.Designation
    createdAt?: DateTimeFilter<"ActiveInvitationOrRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ActiveInvitationOrRequest"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActiveInvitationOrRequestOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamsOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
  }

  export type ActiveInvitationOrRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_memberId_designation?: ActiveInvitationOrRequestTeamIdMemberIdDesignationCompoundUniqueInput
    AND?: ActiveInvitationOrRequestWhereInput | ActiveInvitationOrRequestWhereInput[]
    OR?: ActiveInvitationOrRequestWhereInput[]
    NOT?: ActiveInvitationOrRequestWhereInput | ActiveInvitationOrRequestWhereInput[]
    teamId?: StringFilter<"ActiveInvitationOrRequest"> | string
    memberId?: StringFilter<"ActiveInvitationOrRequest"> | string
    designation?: EnumDesignationFilter<"ActiveInvitationOrRequest"> | $Enums.Designation
    createdAt?: DateTimeFilter<"ActiveInvitationOrRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ActiveInvitationOrRequest"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "teamId_memberId_designation">

  export type ActiveInvitationOrRequestOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActiveInvitationOrRequestCountOrderByAggregateInput
    _max?: ActiveInvitationOrRequestMaxOrderByAggregateInput
    _min?: ActiveInvitationOrRequestMinOrderByAggregateInput
  }

  export type ActiveInvitationOrRequestScalarWhereWithAggregatesInput = {
    AND?: ActiveInvitationOrRequestScalarWhereWithAggregatesInput | ActiveInvitationOrRequestScalarWhereWithAggregatesInput[]
    OR?: ActiveInvitationOrRequestScalarWhereWithAggregatesInput[]
    NOT?: ActiveInvitationOrRequestScalarWhereWithAggregatesInput | ActiveInvitationOrRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActiveInvitationOrRequest"> | string
    teamId?: StringWithAggregatesFilter<"ActiveInvitationOrRequest"> | string
    memberId?: StringWithAggregatesFilter<"ActiveInvitationOrRequest"> | string
    designation?: EnumDesignationWithAggregatesFilter<"ActiveInvitationOrRequest"> | $Enums.Designation
    createdAt?: DateTimeWithAggregatesFilter<"ActiveInvitationOrRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActiveInvitationOrRequest"> | Date | string
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    createdById?: StringFilter<"Notice"> | string
    teamId?: StringFilter<"Notice"> | string
    startDate?: DateTimeFilter<"Notice"> | Date | string
    endDate?: DateTimeFilter<"Notice"> | Date | string
    status?: EnumStatusFilter<"Notice"> | $Enums.Status
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    history?: NoticeHistoryListRelationFilter
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdById?: SortOrder
    teamId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
    history?: NoticeHistoryOrderByRelationAggregateInput
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_title_startDate_endDate?: NoticeTeamIdTitleStartDateEndDateCompoundUniqueInput
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    createdById?: StringFilter<"Notice"> | string
    teamId?: StringFilter<"Notice"> | string
    startDate?: DateTimeFilter<"Notice"> | Date | string
    endDate?: DateTimeFilter<"Notice"> | Date | string
    status?: EnumStatusFilter<"Notice"> | $Enums.Status
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    history?: NoticeHistoryListRelationFilter
  }, "id" | "teamId_title_startDate_endDate">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdById?: SortOrder
    teamId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notice"> | string
    title?: StringWithAggregatesFilter<"Notice"> | string
    content?: StringWithAggregatesFilter<"Notice"> | string
    createdById?: StringWithAggregatesFilter<"Notice"> | string
    teamId?: StringWithAggregatesFilter<"Notice"> | string
    startDate?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Notice"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
  }

  export type NoticeHistoryWhereInput = {
    AND?: NoticeHistoryWhereInput | NoticeHistoryWhereInput[]
    OR?: NoticeHistoryWhereInput[]
    NOT?: NoticeHistoryWhereInput | NoticeHistoryWhereInput[]
    id?: StringFilter<"NoticeHistory"> | string
    noticeId?: StringFilter<"NoticeHistory"> | string
    title?: StringFilter<"NoticeHistory"> | string
    content?: StringFilter<"NoticeHistory"> | string
    startDate?: DateTimeFilter<"NoticeHistory"> | Date | string
    endDate?: DateTimeFilter<"NoticeHistory"> | Date | string
    status?: EnumStatusFilter<"NoticeHistory"> | $Enums.Status
    createdById?: StringFilter<"NoticeHistory"> | string
    createdAt?: DateTimeFilter<"NoticeHistory"> | Date | string
    notice?: XOR<NoticeScalarRelationFilter, NoticeWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoticeHistoryOrderByWithRelationInput = {
    id?: SortOrder
    noticeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    notice?: NoticeOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type NoticeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoticeHistoryWhereInput | NoticeHistoryWhereInput[]
    OR?: NoticeHistoryWhereInput[]
    NOT?: NoticeHistoryWhereInput | NoticeHistoryWhereInput[]
    noticeId?: StringFilter<"NoticeHistory"> | string
    title?: StringFilter<"NoticeHistory"> | string
    content?: StringFilter<"NoticeHistory"> | string
    startDate?: DateTimeFilter<"NoticeHistory"> | Date | string
    endDate?: DateTimeFilter<"NoticeHistory"> | Date | string
    status?: EnumStatusFilter<"NoticeHistory"> | $Enums.Status
    createdById?: StringFilter<"NoticeHistory"> | string
    createdAt?: DateTimeFilter<"NoticeHistory"> | Date | string
    notice?: XOR<NoticeScalarRelationFilter, NoticeWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NoticeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    noticeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: NoticeHistoryCountOrderByAggregateInput
    _max?: NoticeHistoryMaxOrderByAggregateInput
    _min?: NoticeHistoryMinOrderByAggregateInput
  }

  export type NoticeHistoryScalarWhereWithAggregatesInput = {
    AND?: NoticeHistoryScalarWhereWithAggregatesInput | NoticeHistoryScalarWhereWithAggregatesInput[]
    OR?: NoticeHistoryScalarWhereWithAggregatesInput[]
    NOT?: NoticeHistoryScalarWhereWithAggregatesInput | NoticeHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoticeHistory"> | string
    noticeId?: StringWithAggregatesFilter<"NoticeHistory"> | string
    title?: StringWithAggregatesFilter<"NoticeHistory"> | string
    content?: StringWithAggregatesFilter<"NoticeHistory"> | string
    startDate?: DateTimeWithAggregatesFilter<"NoticeHistory"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"NoticeHistory"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"NoticeHistory"> | $Enums.Status
    createdById?: StringWithAggregatesFilter<"NoticeHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NoticeHistory"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    title?: StringFilter<"Chat"> | string
    about?: StringFilter<"Chat"> | string
    teamId?: StringFilter<"Chat"> | string
    isActive?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    messages?: MessageListRelationFilter
    members?: UserListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamsOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    members?: UserOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_title?: ChatTeamIdTitleCompoundUniqueInput
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    title?: StringFilter<"Chat"> | string
    about?: StringFilter<"Chat"> | string
    teamId?: StringFilter<"Chat"> | string
    isActive?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    messages?: MessageListRelationFilter
    members?: UserListRelationFilter
  }, "id" | "teamId_title">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    title?: StringWithAggregatesFilter<"Chat"> | string
    about?: StringWithAggregatesFilter<"Chat"> | string
    teamId?: StringWithAggregatesFilter<"Chat"> | string
    isActive?: BoolWithAggregatesFilter<"Chat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    userId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ImportCSVCreateInput = {
    id?: string
    email: string
    mobileNumber: string
    courseName?: ImportCSVCreatecourseNameInput | string[]
  }

  export type ImportCSVUncheckedCreateInput = {
    id?: string
    email: string
    mobileNumber: string
    courseName?: ImportCSVCreatecourseNameInput | string[]
  }

  export type ImportCSVUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    courseName?: ImportCSVUpdatecourseNameInput | string[]
  }

  export type ImportCSVUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    courseName?: ImportCSVUpdatecourseNameInput | string[]
  }

  export type ImportCSVCreateManyInput = {
    id?: string
    email: string
    mobileNumber: string
    courseName?: ImportCSVCreatecourseNameInput | string[]
  }

  export type ImportCSVUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    courseName?: ImportCSVUpdatecourseNameInput | string[]
  }

  export type ImportCSVUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    courseName?: ImportCSVUpdatecourseNameInput | string[]
  }

  export type UserCreateInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
  }

  export type TeamsCreateInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateManyInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamCreateInput = {
    id?: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRoleInTeamInput
    team: TeamsCreateNestedOneWithoutUserRoleInTeamInput
  }

  export type UserRoleInTeamUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleInTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRoleInTeamNestedInput
    team?: TeamsUpdateOneRequiredWithoutUserRoleInTeamNestedInput
  }

  export type UserRoleInTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleInTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    teams?: TeamsCreateNestedManyWithoutTagsInput
    users?: UserCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    teams?: TeamsUncheckedCreateNestedManyWithoutTagsInput
    users?: UserUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamsUpdateManyWithoutTagsNestedInput
    users?: UserUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamsUncheckedUpdateManyWithoutTagsNestedInput
    users?: UserUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsEditLogCreateInput = {
    id?: string
    requestId?: string | null
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutLogsInput
    user: UserCreateNestedOneWithoutTeamsEditLogInput
  }

  export type TeamsEditLogUncheckedCreateInput = {
    id?: string
    requestId?: string | null
    teamId: string
    userId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsEditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutLogsNestedInput
    user?: UserUpdateOneRequiredWithoutTeamsEditLogNestedInput
  }

  export type TeamsEditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsEditLogCreateManyInput = {
    id?: string
    requestId?: string | null
    teamId: string
    userId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsEditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsEditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestCreateInput = {
    id?: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutActiveRequestsInput
    member: UserCreateNestedOneWithoutActiveRequestsInput
  }

  export type ActiveInvitationOrRequestUncheckedCreateInput = {
    id?: string
    teamId: string
    memberId: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActiveInvitationOrRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutActiveRequestsNestedInput
    member?: UserUpdateOneRequiredWithoutActiveRequestsNestedInput
  }

  export type ActiveInvitationOrRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestCreateManyInput = {
    id?: string
    teamId: string
    memberId: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActiveInvitationOrRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeCreateInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutNoticesInput
    team: TeamsCreateNestedOneWithoutNoticesInput
    history?: NoticeHistoryCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdById: string
    teamId: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: NoticeHistoryUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutNoticesNestedInput
    team?: TeamsUpdateOneRequiredWithoutNoticesNestedInput
    history?: NoticeHistoryUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: NoticeHistoryUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeCreateManyInput = {
    id?: string
    title: string
    content: string
    createdById: string
    teamId: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeHistoryCreateInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    notice: NoticeCreateNestedOneWithoutHistoryInput
    createdBy: UserCreateNestedOneWithoutNoticeHistoryInput
  }

  export type NoticeHistoryUncheckedCreateInput = {
    id?: string
    noticeId: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdById: string
    createdAt?: Date | string
  }

  export type NoticeHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notice?: NoticeUpdateOneRequiredWithoutHistoryNestedInput
    createdBy?: UserUpdateOneRequiredWithoutNoticeHistoryNestedInput
  }

  export type NoticeHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noticeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeHistoryCreateManyInput = {
    id?: string
    noticeId: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdById: string
    createdAt?: Date | string
  }

  export type NoticeHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noticeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    title: string
    about: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
    members?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    title: string
    about: string
    teamId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    members?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
    members?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    members?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    title: string
    about: string
    teamId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    userId: string
    chatId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    userId: string
    chatId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ImportCSVEmailMobileNumberCompoundUniqueInput = {
    email: string
    mobileNumber: string
  }

  export type ImportCSVCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    courseName?: SortOrder
  }

  export type ImportCSVMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
  }

  export type ImportCSVMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumDesignationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel> | null
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesignationNullableFilter<$PrismaModel> | $Enums.Designation | null
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TeamsListRelationFilter = {
    every?: TeamsWhereInput
    some?: TeamsWhereInput
    none?: TeamsWhereInput
  }

  export type ActiveInvitationOrRequestListRelationFilter = {
    every?: ActiveInvitationOrRequestWhereInput
    some?: ActiveInvitationOrRequestWhereInput
    none?: ActiveInvitationOrRequestWhereInput
  }

  export type TeamsEditLogListRelationFilter = {
    every?: TeamsEditLogWhereInput
    some?: TeamsEditLogWhereInput
    none?: TeamsEditLogWhereInput
  }

  export type UserRoleInTeamListRelationFilter = {
    every?: UserRoleInTeamWhereInput
    some?: UserRoleInTeamWhereInput
    none?: UserRoleInTeamWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type NoticeHistoryListRelationFilter = {
    every?: NoticeHistoryWhereInput
    some?: NoticeHistoryWhereInput
    none?: NoticeHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActiveInvitationOrRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsEditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleInTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    username?: SortOrder
    password?: SortOrder
    courseName?: SortOrder
    about?: SortOrder
    role?: SortOrder
    isTeamLeader?: SortOrder
    isActive?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
    hashnode?: SortOrder
    peerlist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    designation?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    username?: SortOrder
    password?: SortOrder
    about?: SortOrder
    role?: SortOrder
    isTeamLeader?: SortOrder
    isActive?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
    hashnode?: SortOrder
    peerlist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    designation?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    username?: SortOrder
    password?: SortOrder
    about?: SortOrder
    role?: SortOrder
    isTeamLeader?: SortOrder
    isActive?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
    hashnode?: SortOrder
    peerlist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    designation?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDesignationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel> | null
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesignationNullableWithAggregatesFilter<$PrismaModel> | $Enums.Designation | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDesignationNullableFilter<$PrismaModel>
    _max?: NestedEnumDesignationNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueTitle?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamLeaderId?: SortOrder
    isActive?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueTitle?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamLeaderId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueTitle?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamLeaderId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDesignationFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel>
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationFilter<$PrismaModel> | $Enums.Designation
  }

  export type TeamsScalarRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type UserRoleInTeamCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    designation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleInTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    designation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleInTeamMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    designation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDesignationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel>
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationWithAggregatesFilter<$PrismaModel> | $Enums.Designation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignationFilter<$PrismaModel>
    _max?: NestedEnumDesignationFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type TeamsEditLogCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsEditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsEditLogMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type ActiveInvitationOrRequestTeamIdMemberIdDesignationCompoundUniqueInput = {
    teamId: string
    memberId: string
    designation: $Enums.Designation
  }

  export type ActiveInvitationOrRequestCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActiveInvitationOrRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActiveInvitationOrRequestMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NoticeTeamIdTitleStartDateEndDateCompoundUniqueInput = {
    teamId: string
    title: string
    startDate: Date | string
    endDate: Date | string
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdById?: SortOrder
    teamId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdById?: SortOrder
    teamId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdById?: SortOrder
    teamId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NoticeScalarRelationFilter = {
    is?: NoticeWhereInput
    isNot?: NoticeWhereInput
  }

  export type NoticeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    noticeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    noticeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    noticeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatTeamIdTitleCompoundUniqueInput = {
    teamId: string
    title: string
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    about?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImportCSVCreatecourseNameInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImportCSVUpdatecourseNameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserCreatecourseNameInput = {
    set: string[]
  }

  export type TagCreateNestedManyWithoutUsersInput = {
    create?: XOR<TagCreateWithoutUsersInput, TagUncheckedCreateWithoutUsersInput> | TagCreateWithoutUsersInput[] | TagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUsersInput | TagCreateOrConnectWithoutUsersInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TeamsCreateNestedManyWithoutTeamLeaderInput = {
    create?: XOR<TeamsCreateWithoutTeamLeaderInput, TeamsUncheckedCreateWithoutTeamLeaderInput> | TeamsCreateWithoutTeamLeaderInput[] | TeamsUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTeamLeaderInput | TeamsCreateOrConnectWithoutTeamLeaderInput[]
    createMany?: TeamsCreateManyTeamLeaderInputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsCreateNestedManyWithoutMembersInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput> | TeamsCreateWithoutMembersInput[] | TeamsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput | TeamsCreateOrConnectWithoutMembersInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutMemberInput, ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput> | ActiveInvitationOrRequestCreateWithoutMemberInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput | ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput[]
    createMany?: ActiveInvitationOrRequestCreateManyMemberInputEnvelope
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
  }

  export type TeamsEditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamsEditLogCreateWithoutUserInput, TeamsEditLogUncheckedCreateWithoutUserInput> | TeamsEditLogCreateWithoutUserInput[] | TeamsEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutUserInput | TeamsEditLogCreateOrConnectWithoutUserInput[]
    createMany?: TeamsEditLogCreateManyUserInputEnvelope
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
  }

  export type UserRoleInTeamCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleInTeamCreateWithoutUserInput, UserRoleInTeamUncheckedCreateWithoutUserInput> | UserRoleInTeamCreateWithoutUserInput[] | UserRoleInTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutUserInput | UserRoleInTeamCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleInTeamCreateManyUserInputEnvelope
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutMembersInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput> | ChatCreateWithoutMembersInput[] | ChatUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput | ChatCreateOrConnectWithoutMembersInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NoticeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type NoticeHistoryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoticeHistoryCreateWithoutCreatedByInput, NoticeHistoryUncheckedCreateWithoutCreatedByInput> | NoticeHistoryCreateWithoutCreatedByInput[] | NoticeHistoryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutCreatedByInput | NoticeHistoryCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoticeHistoryCreateManyCreatedByInputEnvelope
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TagCreateWithoutUsersInput, TagUncheckedCreateWithoutUsersInput> | TagCreateWithoutUsersInput[] | TagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUsersInput | TagCreateOrConnectWithoutUsersInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput = {
    create?: XOR<TeamsCreateWithoutTeamLeaderInput, TeamsUncheckedCreateWithoutTeamLeaderInput> | TeamsCreateWithoutTeamLeaderInput[] | TeamsUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTeamLeaderInput | TeamsCreateOrConnectWithoutTeamLeaderInput[]
    createMany?: TeamsCreateManyTeamLeaderInputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput> | TeamsCreateWithoutMembersInput[] | TeamsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput | TeamsCreateOrConnectWithoutMembersInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutMemberInput, ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput> | ActiveInvitationOrRequestCreateWithoutMemberInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput | ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput[]
    createMany?: ActiveInvitationOrRequestCreateManyMemberInputEnvelope
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
  }

  export type TeamsEditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamsEditLogCreateWithoutUserInput, TeamsEditLogUncheckedCreateWithoutUserInput> | TeamsEditLogCreateWithoutUserInput[] | TeamsEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutUserInput | TeamsEditLogCreateOrConnectWithoutUserInput[]
    createMany?: TeamsEditLogCreateManyUserInputEnvelope
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
  }

  export type UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleInTeamCreateWithoutUserInput, UserRoleInTeamUncheckedCreateWithoutUserInput> | UserRoleInTeamCreateWithoutUserInput[] | UserRoleInTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutUserInput | UserRoleInTeamCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleInTeamCreateManyUserInputEnvelope
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput> | ChatCreateWithoutMembersInput[] | ChatUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput | ChatCreateOrConnectWithoutMembersInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoticeHistoryCreateWithoutCreatedByInput, NoticeHistoryUncheckedCreateWithoutCreatedByInput> | NoticeHistoryCreateWithoutCreatedByInput[] | NoticeHistoryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutCreatedByInput | NoticeHistoryCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoticeHistoryCreateManyCreatedByInputEnvelope
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
  }

  export type UserUpdatecourseNameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumDesignationFieldUpdateOperationsInput = {
    set?: $Enums.Designation | null
  }

  export type TagUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TagCreateWithoutUsersInput, TagUncheckedCreateWithoutUsersInput> | TagCreateWithoutUsersInput[] | TagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUsersInput | TagCreateOrConnectWithoutUsersInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUsersInput | TagUpsertWithWhereUniqueWithoutUsersInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUsersInput | TagUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUsersInput | TagUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TeamsUpdateManyWithoutTeamLeaderNestedInput = {
    create?: XOR<TeamsCreateWithoutTeamLeaderInput, TeamsUncheckedCreateWithoutTeamLeaderInput> | TeamsCreateWithoutTeamLeaderInput[] | TeamsUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTeamLeaderInput | TeamsCreateOrConnectWithoutTeamLeaderInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutTeamLeaderInput | TeamsUpsertWithWhereUniqueWithoutTeamLeaderInput[]
    createMany?: TeamsCreateManyTeamLeaderInputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutTeamLeaderInput | TeamsUpdateWithWhereUniqueWithoutTeamLeaderInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutTeamLeaderInput | TeamsUpdateManyWithWhereWithoutTeamLeaderInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUpdateManyWithoutMembersNestedInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput> | TeamsCreateWithoutMembersInput[] | TeamsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput | TeamsCreateOrConnectWithoutMembersInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutMembersInput | TeamsUpsertWithWhereUniqueWithoutMembersInput[]
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutMembersInput | TeamsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutMembersInput | TeamsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutMemberInput, ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput> | ActiveInvitationOrRequestCreateWithoutMemberInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput | ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput[]
    upsert?: ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutMemberInput | ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ActiveInvitationOrRequestCreateManyMemberInputEnvelope
    set?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    disconnect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    delete?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    update?: ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutMemberInput | ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ActiveInvitationOrRequestUpdateManyWithWhereWithoutMemberInput | ActiveInvitationOrRequestUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ActiveInvitationOrRequestScalarWhereInput | ActiveInvitationOrRequestScalarWhereInput[]
  }

  export type TeamsEditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamsEditLogCreateWithoutUserInput, TeamsEditLogUncheckedCreateWithoutUserInput> | TeamsEditLogCreateWithoutUserInput[] | TeamsEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutUserInput | TeamsEditLogCreateOrConnectWithoutUserInput[]
    upsert?: TeamsEditLogUpsertWithWhereUniqueWithoutUserInput | TeamsEditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamsEditLogCreateManyUserInputEnvelope
    set?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    disconnect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    delete?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    update?: TeamsEditLogUpdateWithWhereUniqueWithoutUserInput | TeamsEditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamsEditLogUpdateManyWithWhereWithoutUserInput | TeamsEditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamsEditLogScalarWhereInput | TeamsEditLogScalarWhereInput[]
  }

  export type UserRoleInTeamUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleInTeamCreateWithoutUserInput, UserRoleInTeamUncheckedCreateWithoutUserInput> | UserRoleInTeamCreateWithoutUserInput[] | UserRoleInTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutUserInput | UserRoleInTeamCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleInTeamUpsertWithWhereUniqueWithoutUserInput | UserRoleInTeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleInTeamCreateManyUserInputEnvelope
    set?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    disconnect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    delete?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    update?: UserRoleInTeamUpdateWithWhereUniqueWithoutUserInput | UserRoleInTeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleInTeamUpdateManyWithWhereWithoutUserInput | UserRoleInTeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleInTeamScalarWhereInput | UserRoleInTeamScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput> | ChatCreateWithoutMembersInput[] | ChatUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput | ChatCreateOrConnectWithoutMembersInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutMembersInput | ChatUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutMembersInput | ChatUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutMembersInput | ChatUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NoticeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutCreatedByInput | NoticeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutCreatedByInput | NoticeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutCreatedByInput | NoticeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type NoticeHistoryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoticeHistoryCreateWithoutCreatedByInput, NoticeHistoryUncheckedCreateWithoutCreatedByInput> | NoticeHistoryCreateWithoutCreatedByInput[] | NoticeHistoryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutCreatedByInput | NoticeHistoryCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoticeHistoryUpsertWithWhereUniqueWithoutCreatedByInput | NoticeHistoryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoticeHistoryCreateManyCreatedByInputEnvelope
    set?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    disconnect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    delete?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    update?: NoticeHistoryUpdateWithWhereUniqueWithoutCreatedByInput | NoticeHistoryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoticeHistoryUpdateManyWithWhereWithoutCreatedByInput | NoticeHistoryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoticeHistoryScalarWhereInput | NoticeHistoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TagCreateWithoutUsersInput, TagUncheckedCreateWithoutUsersInput> | TagCreateWithoutUsersInput[] | TagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUsersInput | TagCreateOrConnectWithoutUsersInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUsersInput | TagUpsertWithWhereUniqueWithoutUsersInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUsersInput | TagUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUsersInput | TagUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput = {
    create?: XOR<TeamsCreateWithoutTeamLeaderInput, TeamsUncheckedCreateWithoutTeamLeaderInput> | TeamsCreateWithoutTeamLeaderInput[] | TeamsUncheckedCreateWithoutTeamLeaderInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTeamLeaderInput | TeamsCreateOrConnectWithoutTeamLeaderInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutTeamLeaderInput | TeamsUpsertWithWhereUniqueWithoutTeamLeaderInput[]
    createMany?: TeamsCreateManyTeamLeaderInputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutTeamLeaderInput | TeamsUpdateWithWhereUniqueWithoutTeamLeaderInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutTeamLeaderInput | TeamsUpdateManyWithWhereWithoutTeamLeaderInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput> | TeamsCreateWithoutMembersInput[] | TeamsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput | TeamsCreateOrConnectWithoutMembersInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutMembersInput | TeamsUpsertWithWhereUniqueWithoutMembersInput[]
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutMembersInput | TeamsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutMembersInput | TeamsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutMemberInput, ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput> | ActiveInvitationOrRequestCreateWithoutMemberInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput | ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput[]
    upsert?: ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutMemberInput | ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ActiveInvitationOrRequestCreateManyMemberInputEnvelope
    set?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    disconnect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    delete?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    update?: ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutMemberInput | ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ActiveInvitationOrRequestUpdateManyWithWhereWithoutMemberInput | ActiveInvitationOrRequestUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ActiveInvitationOrRequestScalarWhereInput | ActiveInvitationOrRequestScalarWhereInput[]
  }

  export type TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamsEditLogCreateWithoutUserInput, TeamsEditLogUncheckedCreateWithoutUserInput> | TeamsEditLogCreateWithoutUserInput[] | TeamsEditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutUserInput | TeamsEditLogCreateOrConnectWithoutUserInput[]
    upsert?: TeamsEditLogUpsertWithWhereUniqueWithoutUserInput | TeamsEditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamsEditLogCreateManyUserInputEnvelope
    set?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    disconnect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    delete?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    update?: TeamsEditLogUpdateWithWhereUniqueWithoutUserInput | TeamsEditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamsEditLogUpdateManyWithWhereWithoutUserInput | TeamsEditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamsEditLogScalarWhereInput | TeamsEditLogScalarWhereInput[]
  }

  export type UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleInTeamCreateWithoutUserInput, UserRoleInTeamUncheckedCreateWithoutUserInput> | UserRoleInTeamCreateWithoutUserInput[] | UserRoleInTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutUserInput | UserRoleInTeamCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleInTeamUpsertWithWhereUniqueWithoutUserInput | UserRoleInTeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleInTeamCreateManyUserInputEnvelope
    set?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    disconnect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    delete?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    update?: UserRoleInTeamUpdateWithWhereUniqueWithoutUserInput | UserRoleInTeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleInTeamUpdateManyWithWhereWithoutUserInput | UserRoleInTeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleInTeamScalarWhereInput | UserRoleInTeamScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput> | ChatCreateWithoutMembersInput[] | ChatUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput | ChatCreateOrConnectWithoutMembersInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutMembersInput | ChatUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutMembersInput | ChatUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutMembersInput | ChatUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutCreatedByInput | NoticeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutCreatedByInput | NoticeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutCreatedByInput | NoticeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoticeHistoryCreateWithoutCreatedByInput, NoticeHistoryUncheckedCreateWithoutCreatedByInput> | NoticeHistoryCreateWithoutCreatedByInput[] | NoticeHistoryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutCreatedByInput | NoticeHistoryCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoticeHistoryUpsertWithWhereUniqueWithoutCreatedByInput | NoticeHistoryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoticeHistoryCreateManyCreatedByInputEnvelope
    set?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    disconnect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    delete?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    update?: NoticeHistoryUpdateWithWhereUniqueWithoutCreatedByInput | NoticeHistoryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoticeHistoryUpdateManyWithWhereWithoutCreatedByInput | NoticeHistoryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoticeHistoryScalarWhereInput | NoticeHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamLeaderOfInput = {
    create?: XOR<UserCreateWithoutTeamLeaderOfInput, UserUncheckedCreateWithoutTeamLeaderOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamLeaderOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TagCreateWithoutTeamsInput, TagUncheckedCreateWithoutTeamsInput> | TagCreateWithoutTeamsInput[] | TagUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTeamsInput | TagCreateOrConnectWithoutTeamsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TeamsEditLogCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamsEditLogCreateWithoutTeamInput, TeamsEditLogUncheckedCreateWithoutTeamInput> | TeamsEditLogCreateWithoutTeamInput[] | TeamsEditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutTeamInput | TeamsEditLogCreateOrConnectWithoutTeamInput[]
    createMany?: TeamsEditLogCreateManyTeamInputEnvelope
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
  }

  export type UserRoleInTeamCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserRoleInTeamCreateWithoutTeamInput, UserRoleInTeamUncheckedCreateWithoutTeamInput> | UserRoleInTeamCreateWithoutTeamInput[] | UserRoleInTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutTeamInput | UserRoleInTeamCreateOrConnectWithoutTeamInput[]
    createMany?: UserRoleInTeamCreateManyTeamInputEnvelope
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
  }

  export type ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutTeamInput, ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput> | ActiveInvitationOrRequestCreateWithoutTeamInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput | ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput[]
    createMany?: ActiveInvitationOrRequestCreateManyTeamInputEnvelope
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutTeamInput = {
    create?: XOR<ChatCreateWithoutTeamInput, ChatUncheckedCreateWithoutTeamInput> | ChatCreateWithoutTeamInput[] | ChatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTeamInput | ChatCreateOrConnectWithoutTeamInput[]
    createMany?: ChatCreateManyTeamInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NoticeCreateNestedManyWithoutTeamInput = {
    create?: XOR<NoticeCreateWithoutTeamInput, NoticeUncheckedCreateWithoutTeamInput> | NoticeCreateWithoutTeamInput[] | NoticeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutTeamInput | NoticeCreateOrConnectWithoutTeamInput[]
    createMany?: NoticeCreateManyTeamInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TagCreateWithoutTeamsInput, TagUncheckedCreateWithoutTeamsInput> | TagCreateWithoutTeamsInput[] | TagUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTeamsInput | TagCreateOrConnectWithoutTeamsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamsEditLogCreateWithoutTeamInput, TeamsEditLogUncheckedCreateWithoutTeamInput> | TeamsEditLogCreateWithoutTeamInput[] | TeamsEditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutTeamInput | TeamsEditLogCreateOrConnectWithoutTeamInput[]
    createMany?: TeamsEditLogCreateManyTeamInputEnvelope
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
  }

  export type UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserRoleInTeamCreateWithoutTeamInput, UserRoleInTeamUncheckedCreateWithoutTeamInput> | UserRoleInTeamCreateWithoutTeamInput[] | UserRoleInTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutTeamInput | UserRoleInTeamCreateOrConnectWithoutTeamInput[]
    createMany?: UserRoleInTeamCreateManyTeamInputEnvelope
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
  }

  export type ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutTeamInput, ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput> | ActiveInvitationOrRequestCreateWithoutTeamInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput | ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput[]
    createMany?: ActiveInvitationOrRequestCreateManyTeamInputEnvelope
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ChatCreateWithoutTeamInput, ChatUncheckedCreateWithoutTeamInput> | ChatCreateWithoutTeamInput[] | ChatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTeamInput | ChatCreateOrConnectWithoutTeamInput[]
    createMany?: ChatCreateManyTeamInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<NoticeCreateWithoutTeamInput, NoticeUncheckedCreateWithoutTeamInput> | NoticeCreateWithoutTeamInput[] | NoticeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutTeamInput | NoticeCreateOrConnectWithoutTeamInput[]
    createMany?: NoticeCreateManyTeamInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput = {
    create?: XOR<UserCreateWithoutTeamLeaderOfInput, UserUncheckedCreateWithoutTeamLeaderOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamLeaderOfInput
    upsert?: UserUpsertWithoutTeamLeaderOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamLeaderOfInput, UserUpdateWithoutTeamLeaderOfInput>, UserUncheckedUpdateWithoutTeamLeaderOfInput>
  }

  export type UserUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput | UserUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput | UserUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamsInput | UserUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TagUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TagCreateWithoutTeamsInput, TagUncheckedCreateWithoutTeamsInput> | TagCreateWithoutTeamsInput[] | TagUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTeamsInput | TagCreateOrConnectWithoutTeamsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTeamsInput | TagUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTeamsInput | TagUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTeamsInput | TagUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TeamsEditLogUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamsEditLogCreateWithoutTeamInput, TeamsEditLogUncheckedCreateWithoutTeamInput> | TeamsEditLogCreateWithoutTeamInput[] | TeamsEditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutTeamInput | TeamsEditLogCreateOrConnectWithoutTeamInput[]
    upsert?: TeamsEditLogUpsertWithWhereUniqueWithoutTeamInput | TeamsEditLogUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamsEditLogCreateManyTeamInputEnvelope
    set?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    disconnect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    delete?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    update?: TeamsEditLogUpdateWithWhereUniqueWithoutTeamInput | TeamsEditLogUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamsEditLogUpdateManyWithWhereWithoutTeamInput | TeamsEditLogUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamsEditLogScalarWhereInput | TeamsEditLogScalarWhereInput[]
  }

  export type UserRoleInTeamUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserRoleInTeamCreateWithoutTeamInput, UserRoleInTeamUncheckedCreateWithoutTeamInput> | UserRoleInTeamCreateWithoutTeamInput[] | UserRoleInTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutTeamInput | UserRoleInTeamCreateOrConnectWithoutTeamInput[]
    upsert?: UserRoleInTeamUpsertWithWhereUniqueWithoutTeamInput | UserRoleInTeamUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserRoleInTeamCreateManyTeamInputEnvelope
    set?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    disconnect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    delete?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    update?: UserRoleInTeamUpdateWithWhereUniqueWithoutTeamInput | UserRoleInTeamUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserRoleInTeamUpdateManyWithWhereWithoutTeamInput | UserRoleInTeamUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserRoleInTeamScalarWhereInput | UserRoleInTeamScalarWhereInput[]
  }

  export type ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutTeamInput, ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput> | ActiveInvitationOrRequestCreateWithoutTeamInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput | ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput[]
    upsert?: ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutTeamInput | ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ActiveInvitationOrRequestCreateManyTeamInputEnvelope
    set?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    disconnect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    delete?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    update?: ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutTeamInput | ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ActiveInvitationOrRequestUpdateManyWithWhereWithoutTeamInput | ActiveInvitationOrRequestUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ActiveInvitationOrRequestScalarWhereInput | ActiveInvitationOrRequestScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ChatCreateWithoutTeamInput, ChatUncheckedCreateWithoutTeamInput> | ChatCreateWithoutTeamInput[] | ChatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTeamInput | ChatCreateOrConnectWithoutTeamInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutTeamInput | ChatUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ChatCreateManyTeamInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutTeamInput | ChatUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutTeamInput | ChatUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type NoticeUpdateManyWithoutTeamNestedInput = {
    create?: XOR<NoticeCreateWithoutTeamInput, NoticeUncheckedCreateWithoutTeamInput> | NoticeCreateWithoutTeamInput[] | NoticeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutTeamInput | NoticeCreateOrConnectWithoutTeamInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutTeamInput | NoticeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: NoticeCreateManyTeamInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutTeamInput | NoticeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutTeamInput | NoticeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput | UserUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput | UserUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamsInput | UserUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TagCreateWithoutTeamsInput, TagUncheckedCreateWithoutTeamsInput> | TagCreateWithoutTeamsInput[] | TagUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTeamsInput | TagCreateOrConnectWithoutTeamsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTeamsInput | TagUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTeamsInput | TagUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTeamsInput | TagUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamsEditLogCreateWithoutTeamInput, TeamsEditLogUncheckedCreateWithoutTeamInput> | TeamsEditLogCreateWithoutTeamInput[] | TeamsEditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsEditLogCreateOrConnectWithoutTeamInput | TeamsEditLogCreateOrConnectWithoutTeamInput[]
    upsert?: TeamsEditLogUpsertWithWhereUniqueWithoutTeamInput | TeamsEditLogUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamsEditLogCreateManyTeamInputEnvelope
    set?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    disconnect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    delete?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    connect?: TeamsEditLogWhereUniqueInput | TeamsEditLogWhereUniqueInput[]
    update?: TeamsEditLogUpdateWithWhereUniqueWithoutTeamInput | TeamsEditLogUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamsEditLogUpdateManyWithWhereWithoutTeamInput | TeamsEditLogUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamsEditLogScalarWhereInput | TeamsEditLogScalarWhereInput[]
  }

  export type UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserRoleInTeamCreateWithoutTeamInput, UserRoleInTeamUncheckedCreateWithoutTeamInput> | UserRoleInTeamCreateWithoutTeamInput[] | UserRoleInTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserRoleInTeamCreateOrConnectWithoutTeamInput | UserRoleInTeamCreateOrConnectWithoutTeamInput[]
    upsert?: UserRoleInTeamUpsertWithWhereUniqueWithoutTeamInput | UserRoleInTeamUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserRoleInTeamCreateManyTeamInputEnvelope
    set?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    disconnect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    delete?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    connect?: UserRoleInTeamWhereUniqueInput | UserRoleInTeamWhereUniqueInput[]
    update?: UserRoleInTeamUpdateWithWhereUniqueWithoutTeamInput | UserRoleInTeamUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserRoleInTeamUpdateManyWithWhereWithoutTeamInput | UserRoleInTeamUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserRoleInTeamScalarWhereInput | UserRoleInTeamScalarWhereInput[]
  }

  export type ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ActiveInvitationOrRequestCreateWithoutTeamInput, ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput> | ActiveInvitationOrRequestCreateWithoutTeamInput[] | ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput | ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput[]
    upsert?: ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutTeamInput | ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ActiveInvitationOrRequestCreateManyTeamInputEnvelope
    set?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    disconnect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    delete?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    connect?: ActiveInvitationOrRequestWhereUniqueInput | ActiveInvitationOrRequestWhereUniqueInput[]
    update?: ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutTeamInput | ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ActiveInvitationOrRequestUpdateManyWithWhereWithoutTeamInput | ActiveInvitationOrRequestUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ActiveInvitationOrRequestScalarWhereInput | ActiveInvitationOrRequestScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ChatCreateWithoutTeamInput, ChatUncheckedCreateWithoutTeamInput> | ChatCreateWithoutTeamInput[] | ChatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTeamInput | ChatCreateOrConnectWithoutTeamInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutTeamInput | ChatUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ChatCreateManyTeamInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutTeamInput | ChatUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutTeamInput | ChatUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<NoticeCreateWithoutTeamInput, NoticeUncheckedCreateWithoutTeamInput> | NoticeCreateWithoutTeamInput[] | NoticeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutTeamInput | NoticeCreateOrConnectWithoutTeamInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutTeamInput | NoticeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: NoticeCreateManyTeamInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutTeamInput | NoticeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutTeamInput | NoticeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRoleInTeamInput = {
    create?: XOR<UserCreateWithoutUserRoleInTeamInput, UserUncheckedCreateWithoutUserRoleInTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInTeamInput
    connect?: UserWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutUserRoleInTeamInput = {
    create?: XOR<TeamsCreateWithoutUserRoleInTeamInput, TeamsUncheckedCreateWithoutUserRoleInTeamInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutUserRoleInTeamInput
    connect?: TeamsWhereUniqueInput
  }

  export type EnumDesignationFieldUpdateOperationsInput = {
    set?: $Enums.Designation
  }

  export type UserUpdateOneRequiredWithoutUserRoleInTeamNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInTeamInput, UserUncheckedCreateWithoutUserRoleInTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInTeamInput
    upsert?: UserUpsertWithoutUserRoleInTeamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRoleInTeamInput, UserUpdateWithoutUserRoleInTeamInput>, UserUncheckedUpdateWithoutUserRoleInTeamInput>
  }

  export type TeamsUpdateOneRequiredWithoutUserRoleInTeamNestedInput = {
    create?: XOR<TeamsCreateWithoutUserRoleInTeamInput, TeamsUncheckedCreateWithoutUserRoleInTeamInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutUserRoleInTeamInput
    upsert?: TeamsUpsertWithoutUserRoleInTeamInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutUserRoleInTeamInput, TeamsUpdateWithoutUserRoleInTeamInput>, TeamsUncheckedUpdateWithoutUserRoleInTeamInput>
  }

  export type TeamsCreateNestedManyWithoutTagsInput = {
    create?: XOR<TeamsCreateWithoutTagsInput, TeamsUncheckedCreateWithoutTagsInput> | TeamsCreateWithoutTagsInput[] | TeamsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTagsInput | TeamsCreateOrConnectWithoutTagsInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput> | UserCreateWithoutTagsInput[] | UserUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput | UserCreateOrConnectWithoutTagsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<TeamsCreateWithoutTagsInput, TeamsUncheckedCreateWithoutTagsInput> | TeamsCreateWithoutTagsInput[] | TeamsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTagsInput | TeamsCreateOrConnectWithoutTagsInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput> | UserCreateWithoutTagsInput[] | UserUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput | UserCreateOrConnectWithoutTagsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TeamsCreateWithoutTagsInput, TeamsUncheckedCreateWithoutTagsInput> | TeamsCreateWithoutTagsInput[] | TeamsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTagsInput | TeamsCreateOrConnectWithoutTagsInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutTagsInput | TeamsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutTagsInput | TeamsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutTagsInput | TeamsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput> | UserCreateWithoutTagsInput[] | UserUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput | UserCreateOrConnectWithoutTagsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTagsInput | UserUpsertWithWhereUniqueWithoutTagsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTagsInput | UserUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTagsInput | UserUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TeamsCreateWithoutTagsInput, TeamsUncheckedCreateWithoutTagsInput> | TeamsCreateWithoutTagsInput[] | TeamsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutTagsInput | TeamsCreateOrConnectWithoutTagsInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutTagsInput | TeamsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutTagsInput | TeamsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutTagsInput | TeamsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput> | UserCreateWithoutTagsInput[] | UserUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput | UserCreateOrConnectWithoutTagsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTagsInput | UserUpsertWithWhereUniqueWithoutTagsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTagsInput | UserUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTagsInput | UserUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamsCreateNestedOneWithoutLogsInput = {
    create?: XOR<TeamsCreateWithoutLogsInput, TeamsUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutLogsInput
    connect?: TeamsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamsEditLogInput = {
    create?: XOR<UserCreateWithoutTeamsEditLogInput, UserUncheckedCreateWithoutTeamsEditLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsEditLogInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActionFieldUpdateOperationsInput = {
    set?: $Enums.Action
  }

  export type TeamsUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<TeamsCreateWithoutLogsInput, TeamsUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutLogsInput
    upsert?: TeamsUpsertWithoutLogsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutLogsInput, TeamsUpdateWithoutLogsInput>, TeamsUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateOneRequiredWithoutTeamsEditLogNestedInput = {
    create?: XOR<UserCreateWithoutTeamsEditLogInput, UserUncheckedCreateWithoutTeamsEditLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsEditLogInput
    upsert?: UserUpsertWithoutTeamsEditLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsEditLogInput, UserUpdateWithoutTeamsEditLogInput>, UserUncheckedUpdateWithoutTeamsEditLogInput>
  }

  export type TeamsCreateNestedOneWithoutActiveRequestsInput = {
    create?: XOR<TeamsCreateWithoutActiveRequestsInput, TeamsUncheckedCreateWithoutActiveRequestsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutActiveRequestsInput
    connect?: TeamsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActiveRequestsInput = {
    create?: XOR<UserCreateWithoutActiveRequestsInput, UserUncheckedCreateWithoutActiveRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActiveRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamsUpdateOneRequiredWithoutActiveRequestsNestedInput = {
    create?: XOR<TeamsCreateWithoutActiveRequestsInput, TeamsUncheckedCreateWithoutActiveRequestsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutActiveRequestsInput
    upsert?: TeamsUpsertWithoutActiveRequestsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutActiveRequestsInput, TeamsUpdateWithoutActiveRequestsInput>, TeamsUncheckedUpdateWithoutActiveRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutActiveRequestsNestedInput = {
    create?: XOR<UserCreateWithoutActiveRequestsInput, UserUncheckedCreateWithoutActiveRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActiveRequestsInput
    upsert?: UserUpsertWithoutActiveRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActiveRequestsInput, UserUpdateWithoutActiveRequestsInput>, UserUncheckedUpdateWithoutActiveRequestsInput>
  }

  export type UserCreateNestedOneWithoutNoticesInput = {
    create?: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticesInput
    connect?: UserWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutNoticesInput = {
    create?: XOR<TeamsCreateWithoutNoticesInput, TeamsUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutNoticesInput
    connect?: TeamsWhereUniqueInput
  }

  export type NoticeHistoryCreateNestedManyWithoutNoticeInput = {
    create?: XOR<NoticeHistoryCreateWithoutNoticeInput, NoticeHistoryUncheckedCreateWithoutNoticeInput> | NoticeHistoryCreateWithoutNoticeInput[] | NoticeHistoryUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutNoticeInput | NoticeHistoryCreateOrConnectWithoutNoticeInput[]
    createMany?: NoticeHistoryCreateManyNoticeInputEnvelope
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
  }

  export type NoticeHistoryUncheckedCreateNestedManyWithoutNoticeInput = {
    create?: XOR<NoticeHistoryCreateWithoutNoticeInput, NoticeHistoryUncheckedCreateWithoutNoticeInput> | NoticeHistoryCreateWithoutNoticeInput[] | NoticeHistoryUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutNoticeInput | NoticeHistoryCreateOrConnectWithoutNoticeInput[]
    createMany?: NoticeHistoryCreateManyNoticeInputEnvelope
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutNoticesNestedInput = {
    create?: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticesInput
    upsert?: UserUpsertWithoutNoticesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNoticesInput, UserUpdateWithoutNoticesInput>, UserUncheckedUpdateWithoutNoticesInput>
  }

  export type TeamsUpdateOneRequiredWithoutNoticesNestedInput = {
    create?: XOR<TeamsCreateWithoutNoticesInput, TeamsUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutNoticesInput
    upsert?: TeamsUpsertWithoutNoticesInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutNoticesInput, TeamsUpdateWithoutNoticesInput>, TeamsUncheckedUpdateWithoutNoticesInput>
  }

  export type NoticeHistoryUpdateManyWithoutNoticeNestedInput = {
    create?: XOR<NoticeHistoryCreateWithoutNoticeInput, NoticeHistoryUncheckedCreateWithoutNoticeInput> | NoticeHistoryCreateWithoutNoticeInput[] | NoticeHistoryUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutNoticeInput | NoticeHistoryCreateOrConnectWithoutNoticeInput[]
    upsert?: NoticeHistoryUpsertWithWhereUniqueWithoutNoticeInput | NoticeHistoryUpsertWithWhereUniqueWithoutNoticeInput[]
    createMany?: NoticeHistoryCreateManyNoticeInputEnvelope
    set?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    disconnect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    delete?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    update?: NoticeHistoryUpdateWithWhereUniqueWithoutNoticeInput | NoticeHistoryUpdateWithWhereUniqueWithoutNoticeInput[]
    updateMany?: NoticeHistoryUpdateManyWithWhereWithoutNoticeInput | NoticeHistoryUpdateManyWithWhereWithoutNoticeInput[]
    deleteMany?: NoticeHistoryScalarWhereInput | NoticeHistoryScalarWhereInput[]
  }

  export type NoticeHistoryUncheckedUpdateManyWithoutNoticeNestedInput = {
    create?: XOR<NoticeHistoryCreateWithoutNoticeInput, NoticeHistoryUncheckedCreateWithoutNoticeInput> | NoticeHistoryCreateWithoutNoticeInput[] | NoticeHistoryUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: NoticeHistoryCreateOrConnectWithoutNoticeInput | NoticeHistoryCreateOrConnectWithoutNoticeInput[]
    upsert?: NoticeHistoryUpsertWithWhereUniqueWithoutNoticeInput | NoticeHistoryUpsertWithWhereUniqueWithoutNoticeInput[]
    createMany?: NoticeHistoryCreateManyNoticeInputEnvelope
    set?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    disconnect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    delete?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    connect?: NoticeHistoryWhereUniqueInput | NoticeHistoryWhereUniqueInput[]
    update?: NoticeHistoryUpdateWithWhereUniqueWithoutNoticeInput | NoticeHistoryUpdateWithWhereUniqueWithoutNoticeInput[]
    updateMany?: NoticeHistoryUpdateManyWithWhereWithoutNoticeInput | NoticeHistoryUpdateManyWithWhereWithoutNoticeInput[]
    deleteMany?: NoticeHistoryScalarWhereInput | NoticeHistoryScalarWhereInput[]
  }

  export type NoticeCreateNestedOneWithoutHistoryInput = {
    create?: XOR<NoticeCreateWithoutHistoryInput, NoticeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: NoticeCreateOrConnectWithoutHistoryInput
    connect?: NoticeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNoticeHistoryInput = {
    create?: XOR<UserCreateWithoutNoticeHistoryInput, UserUncheckedCreateWithoutNoticeHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type NoticeUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<NoticeCreateWithoutHistoryInput, NoticeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: NoticeCreateOrConnectWithoutHistoryInput
    upsert?: NoticeUpsertWithoutHistoryInput
    connect?: NoticeWhereUniqueInput
    update?: XOR<XOR<NoticeUpdateToOneWithWhereWithoutHistoryInput, NoticeUpdateWithoutHistoryInput>, NoticeUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutNoticeHistoryNestedInput = {
    create?: XOR<UserCreateWithoutNoticeHistoryInput, UserUncheckedCreateWithoutNoticeHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeHistoryInput
    upsert?: UserUpsertWithoutNoticeHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNoticeHistoryInput, UserUpdateWithoutNoticeHistoryInput>, UserUncheckedUpdateWithoutNoticeHistoryInput>
  }

  export type TeamsCreateNestedOneWithoutChatsInput = {
    create?: XOR<TeamsCreateWithoutChatsInput, TeamsUncheckedCreateWithoutChatsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutChatsInput
    connect?: TeamsWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamsUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<TeamsCreateWithoutChatsInput, TeamsUncheckedCreateWithoutChatsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutChatsInput
    upsert?: TeamsUpsertWithoutChatsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutChatsInput, TeamsUpdateWithoutChatsInput>, TeamsUncheckedUpdateWithoutChatsInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumDesignationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel> | null
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesignationNullableFilter<$PrismaModel> | $Enums.Designation | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDesignationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel> | null
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesignationNullableWithAggregatesFilter<$PrismaModel> | $Enums.Designation | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDesignationNullableFilter<$PrismaModel>
    _max?: NestedEnumDesignationNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDesignationFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel>
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationFilter<$PrismaModel> | $Enums.Designation
  }

  export type NestedEnumDesignationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Designation | EnumDesignationFieldRefInput<$PrismaModel>
    in?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Designation[] | ListEnumDesignationFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignationWithAggregatesFilter<$PrismaModel> | $Enums.Designation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignationFilter<$PrismaModel>
    _max?: NestedEnumDesignationFilter<$PrismaModel>
  }

  export type NestedEnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type NestedEnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type TagCreateWithoutUsersInput = {
    id?: string
    name: string
    teams?: TeamsCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    teams?: TeamsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutUsersInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUsersInput, TagUncheckedCreateWithoutUsersInput>
  }

  export type TeamsCreateWithoutTeamLeaderInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutTeamLeaderInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutTeamLeaderInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutTeamLeaderInput, TeamsUncheckedCreateWithoutTeamLeaderInput>
  }

  export type TeamsCreateManyTeamLeaderInputEnvelope = {
    data: TeamsCreateManyTeamLeaderInput | TeamsCreateManyTeamLeaderInput[]
    skipDuplicates?: boolean
  }

  export type TeamsCreateWithoutMembersInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutMembersInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutMembersInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
  }

  export type ActiveInvitationOrRequestCreateWithoutMemberInput = {
    id?: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutActiveRequestsInput
  }

  export type ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput = {
    id?: string
    teamId: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActiveInvitationOrRequestCreateOrConnectWithoutMemberInput = {
    where: ActiveInvitationOrRequestWhereUniqueInput
    create: XOR<ActiveInvitationOrRequestCreateWithoutMemberInput, ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput>
  }

  export type ActiveInvitationOrRequestCreateManyMemberInputEnvelope = {
    data: ActiveInvitationOrRequestCreateManyMemberInput | ActiveInvitationOrRequestCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type TeamsEditLogCreateWithoutUserInput = {
    id?: string
    requestId?: string | null
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutLogsInput
  }

  export type TeamsEditLogUncheckedCreateWithoutUserInput = {
    id?: string
    requestId?: string | null
    teamId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsEditLogCreateOrConnectWithoutUserInput = {
    where: TeamsEditLogWhereUniqueInput
    create: XOR<TeamsEditLogCreateWithoutUserInput, TeamsEditLogUncheckedCreateWithoutUserInput>
  }

  export type TeamsEditLogCreateManyUserInputEnvelope = {
    data: TeamsEditLogCreateManyUserInput | TeamsEditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleInTeamCreateWithoutUserInput = {
    id?: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutUserRoleInTeamInput
  }

  export type UserRoleInTeamUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleInTeamCreateOrConnectWithoutUserInput = {
    where: UserRoleInTeamWhereUniqueInput
    create: XOR<UserRoleInTeamCreateWithoutUserInput, UserRoleInTeamUncheckedCreateWithoutUserInput>
  }

  export type UserRoleInTeamCreateManyUserInputEnvelope = {
    data: UserRoleInTeamCreateManyUserInput | UserRoleInTeamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutMembersInput = {
    id?: string
    title: string
    about: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    id?: string
    title: string
    about: string
    teamId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    chatId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutCreatedByInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutNoticesInput
    history?: NoticeHistoryCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    content: string
    teamId: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: NoticeHistoryUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeCreateOrConnectWithoutCreatedByInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput>
  }

  export type NoticeCreateManyCreatedByInputEnvelope = {
    data: NoticeCreateManyCreatedByInput | NoticeCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type NoticeHistoryCreateWithoutCreatedByInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    notice: NoticeCreateNestedOneWithoutHistoryInput
  }

  export type NoticeHistoryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    noticeId: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type NoticeHistoryCreateOrConnectWithoutCreatedByInput = {
    where: NoticeHistoryWhereUniqueInput
    create: XOR<NoticeHistoryCreateWithoutCreatedByInput, NoticeHistoryUncheckedCreateWithoutCreatedByInput>
  }

  export type NoticeHistoryCreateManyCreatedByInputEnvelope = {
    data: NoticeHistoryCreateManyCreatedByInput | NoticeHistoryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TagUpsertWithWhereUniqueWithoutUsersInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUsersInput, TagUncheckedUpdateWithoutUsersInput>
    create: XOR<TagCreateWithoutUsersInput, TagUncheckedCreateWithoutUsersInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUsersInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUsersInput, TagUncheckedUpdateWithoutUsersInput>
  }

  export type TagUpdateManyWithWhereWithoutUsersInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUsersInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
  }

  export type TeamsUpsertWithWhereUniqueWithoutTeamLeaderInput = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutTeamLeaderInput, TeamsUncheckedUpdateWithoutTeamLeaderInput>
    create: XOR<TeamsCreateWithoutTeamLeaderInput, TeamsUncheckedCreateWithoutTeamLeaderInput>
  }

  export type TeamsUpdateWithWhereUniqueWithoutTeamLeaderInput = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutTeamLeaderInput, TeamsUncheckedUpdateWithoutTeamLeaderInput>
  }

  export type TeamsUpdateManyWithWhereWithoutTeamLeaderInput = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutTeamLeaderInput>
  }

  export type TeamsScalarWhereInput = {
    AND?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
    OR?: TeamsScalarWhereInput[]
    NOT?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
    id?: StringFilter<"Teams"> | string
    uniqueTitle?: StringFilter<"Teams"> | string
    title?: StringFilter<"Teams"> | string
    about?: StringFilter<"Teams"> | string
    teamLeaderId?: StringFilter<"Teams"> | string
    isActive?: BoolFilter<"Teams"> | boolean
    link?: JsonNullableFilter<"Teams">
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
  }

  export type TeamsUpsertWithWhereUniqueWithoutMembersInput = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutMembersInput, TeamsUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
  }

  export type TeamsUpdateWithWhereUniqueWithoutMembersInput = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutMembersInput, TeamsUncheckedUpdateWithoutMembersInput>
  }

  export type TeamsUpdateManyWithWhereWithoutMembersInput = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutMembersInput>
  }

  export type ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutMemberInput = {
    where: ActiveInvitationOrRequestWhereUniqueInput
    update: XOR<ActiveInvitationOrRequestUpdateWithoutMemberInput, ActiveInvitationOrRequestUncheckedUpdateWithoutMemberInput>
    create: XOR<ActiveInvitationOrRequestCreateWithoutMemberInput, ActiveInvitationOrRequestUncheckedCreateWithoutMemberInput>
  }

  export type ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutMemberInput = {
    where: ActiveInvitationOrRequestWhereUniqueInput
    data: XOR<ActiveInvitationOrRequestUpdateWithoutMemberInput, ActiveInvitationOrRequestUncheckedUpdateWithoutMemberInput>
  }

  export type ActiveInvitationOrRequestUpdateManyWithWhereWithoutMemberInput = {
    where: ActiveInvitationOrRequestScalarWhereInput
    data: XOR<ActiveInvitationOrRequestUpdateManyMutationInput, ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberInput>
  }

  export type ActiveInvitationOrRequestScalarWhereInput = {
    AND?: ActiveInvitationOrRequestScalarWhereInput | ActiveInvitationOrRequestScalarWhereInput[]
    OR?: ActiveInvitationOrRequestScalarWhereInput[]
    NOT?: ActiveInvitationOrRequestScalarWhereInput | ActiveInvitationOrRequestScalarWhereInput[]
    id?: StringFilter<"ActiveInvitationOrRequest"> | string
    teamId?: StringFilter<"ActiveInvitationOrRequest"> | string
    memberId?: StringFilter<"ActiveInvitationOrRequest"> | string
    designation?: EnumDesignationFilter<"ActiveInvitationOrRequest"> | $Enums.Designation
    createdAt?: DateTimeFilter<"ActiveInvitationOrRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ActiveInvitationOrRequest"> | Date | string
  }

  export type TeamsEditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamsEditLogWhereUniqueInput
    update: XOR<TeamsEditLogUpdateWithoutUserInput, TeamsEditLogUncheckedUpdateWithoutUserInput>
    create: XOR<TeamsEditLogCreateWithoutUserInput, TeamsEditLogUncheckedCreateWithoutUserInput>
  }

  export type TeamsEditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamsEditLogWhereUniqueInput
    data: XOR<TeamsEditLogUpdateWithoutUserInput, TeamsEditLogUncheckedUpdateWithoutUserInput>
  }

  export type TeamsEditLogUpdateManyWithWhereWithoutUserInput = {
    where: TeamsEditLogScalarWhereInput
    data: XOR<TeamsEditLogUpdateManyMutationInput, TeamsEditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamsEditLogScalarWhereInput = {
    AND?: TeamsEditLogScalarWhereInput | TeamsEditLogScalarWhereInput[]
    OR?: TeamsEditLogScalarWhereInput[]
    NOT?: TeamsEditLogScalarWhereInput | TeamsEditLogScalarWhereInput[]
    id?: StringFilter<"TeamsEditLog"> | string
    requestId?: StringNullableFilter<"TeamsEditLog"> | string | null
    teamId?: StringFilter<"TeamsEditLog"> | string
    userId?: StringFilter<"TeamsEditLog"> | string
    action?: EnumActionFilter<"TeamsEditLog"> | $Enums.Action
    designation?: EnumDesignationFilter<"TeamsEditLog"> | $Enums.Designation
    createdAt?: DateTimeFilter<"TeamsEditLog"> | Date | string
    updatedAt?: DateTimeFilter<"TeamsEditLog"> | Date | string
  }

  export type UserRoleInTeamUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleInTeamWhereUniqueInput
    update: XOR<UserRoleInTeamUpdateWithoutUserInput, UserRoleInTeamUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleInTeamCreateWithoutUserInput, UserRoleInTeamUncheckedCreateWithoutUserInput>
  }

  export type UserRoleInTeamUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleInTeamWhereUniqueInput
    data: XOR<UserRoleInTeamUpdateWithoutUserInput, UserRoleInTeamUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleInTeamUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleInTeamScalarWhereInput
    data: XOR<UserRoleInTeamUpdateManyMutationInput, UserRoleInTeamUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleInTeamScalarWhereInput = {
    AND?: UserRoleInTeamScalarWhereInput | UserRoleInTeamScalarWhereInput[]
    OR?: UserRoleInTeamScalarWhereInput[]
    NOT?: UserRoleInTeamScalarWhereInput | UserRoleInTeamScalarWhereInput[]
    id?: StringFilter<"UserRoleInTeam"> | string
    userId?: StringFilter<"UserRoleInTeam"> | string
    teamId?: StringFilter<"UserRoleInTeam"> | string
    designation?: EnumDesignationFilter<"UserRoleInTeam"> | $Enums.Designation
    isActive?: BoolFilter<"UserRoleInTeam"> | boolean
    createdAt?: DateTimeFilter<"UserRoleInTeam"> | Date | string
    updatedAt?: DateTimeFilter<"UserRoleInTeam"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutMembersInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutMembersInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type ChatUpdateManyWithWhereWithoutMembersInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutMembersInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    title?: StringFilter<"Chat"> | string
    about?: StringFilter<"Chat"> | string
    teamId?: StringFilter<"Chat"> | string
    isActive?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type NoticeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutCreatedByInput, NoticeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutCreatedByInput, NoticeUncheckedUpdateWithoutCreatedByInput>
  }

  export type NoticeUpdateManyWithWhereWithoutCreatedByInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    OR?: NoticeScalarWhereInput[]
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    id?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    createdById?: StringFilter<"Notice"> | string
    teamId?: StringFilter<"Notice"> | string
    startDate?: DateTimeFilter<"Notice"> | Date | string
    endDate?: DateTimeFilter<"Notice"> | Date | string
    status?: EnumStatusFilter<"Notice"> | $Enums.Status
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
  }

  export type NoticeHistoryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: NoticeHistoryWhereUniqueInput
    update: XOR<NoticeHistoryUpdateWithoutCreatedByInput, NoticeHistoryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<NoticeHistoryCreateWithoutCreatedByInput, NoticeHistoryUncheckedCreateWithoutCreatedByInput>
  }

  export type NoticeHistoryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: NoticeHistoryWhereUniqueInput
    data: XOR<NoticeHistoryUpdateWithoutCreatedByInput, NoticeHistoryUncheckedUpdateWithoutCreatedByInput>
  }

  export type NoticeHistoryUpdateManyWithWhereWithoutCreatedByInput = {
    where: NoticeHistoryScalarWhereInput
    data: XOR<NoticeHistoryUpdateManyMutationInput, NoticeHistoryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type NoticeHistoryScalarWhereInput = {
    AND?: NoticeHistoryScalarWhereInput | NoticeHistoryScalarWhereInput[]
    OR?: NoticeHistoryScalarWhereInput[]
    NOT?: NoticeHistoryScalarWhereInput | NoticeHistoryScalarWhereInput[]
    id?: StringFilter<"NoticeHistory"> | string
    noticeId?: StringFilter<"NoticeHistory"> | string
    title?: StringFilter<"NoticeHistory"> | string
    content?: StringFilter<"NoticeHistory"> | string
    startDate?: DateTimeFilter<"NoticeHistory"> | Date | string
    endDate?: DateTimeFilter<"NoticeHistory"> | Date | string
    status?: EnumStatusFilter<"NoticeHistory"> | $Enums.Status
    createdById?: StringFilter<"NoticeHistory"> | string
    createdAt?: DateTimeFilter<"NoticeHistory"> | Date | string
  }

  export type UserCreateWithoutTeamLeaderOfInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTeamLeaderOfInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTeamLeaderOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamLeaderOfInput, UserUncheckedCreateWithoutTeamLeaderOfInput>
  }

  export type UserCreateWithoutTeamsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type TagCreateWithoutTeamsInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutTeamsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTeamsInput, TagUncheckedCreateWithoutTeamsInput>
  }

  export type TeamsEditLogCreateWithoutTeamInput = {
    id?: string
    requestId?: string | null
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamsEditLogInput
  }

  export type TeamsEditLogUncheckedCreateWithoutTeamInput = {
    id?: string
    requestId?: string | null
    userId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsEditLogCreateOrConnectWithoutTeamInput = {
    where: TeamsEditLogWhereUniqueInput
    create: XOR<TeamsEditLogCreateWithoutTeamInput, TeamsEditLogUncheckedCreateWithoutTeamInput>
  }

  export type TeamsEditLogCreateManyTeamInputEnvelope = {
    data: TeamsEditLogCreateManyTeamInput | TeamsEditLogCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleInTeamCreateWithoutTeamInput = {
    id?: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRoleInTeamInput
  }

  export type UserRoleInTeamUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleInTeamCreateOrConnectWithoutTeamInput = {
    where: UserRoleInTeamWhereUniqueInput
    create: XOR<UserRoleInTeamCreateWithoutTeamInput, UserRoleInTeamUncheckedCreateWithoutTeamInput>
  }

  export type UserRoleInTeamCreateManyTeamInputEnvelope = {
    data: UserRoleInTeamCreateManyTeamInput | UserRoleInTeamCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ActiveInvitationOrRequestCreateWithoutTeamInput = {
    id?: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
    member: UserCreateNestedOneWithoutActiveRequestsInput
  }

  export type ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput = {
    id?: string
    memberId: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActiveInvitationOrRequestCreateOrConnectWithoutTeamInput = {
    where: ActiveInvitationOrRequestWhereUniqueInput
    create: XOR<ActiveInvitationOrRequestCreateWithoutTeamInput, ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput>
  }

  export type ActiveInvitationOrRequestCreateManyTeamInputEnvelope = {
    data: ActiveInvitationOrRequestCreateManyTeamInput | ActiveInvitationOrRequestCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutTeamInput = {
    id?: string
    title: string
    about: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    members?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    about: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    members?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatCreateOrConnectWithoutTeamInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutTeamInput, ChatUncheckedCreateWithoutTeamInput>
  }

  export type ChatCreateManyTeamInputEnvelope = {
    data: ChatCreateManyTeamInput | ChatCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutTeamInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutNoticesInput
    history?: NoticeHistoryCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    content: string
    createdById: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: NoticeHistoryUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeCreateOrConnectWithoutTeamInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutTeamInput, NoticeUncheckedCreateWithoutTeamInput>
  }

  export type NoticeCreateManyTeamInputEnvelope = {
    data: NoticeCreateManyTeamInput | NoticeCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeamLeaderOfInput = {
    update: XOR<UserUpdateWithoutTeamLeaderOfInput, UserUncheckedUpdateWithoutTeamLeaderOfInput>
    create: XOR<UserCreateWithoutTeamLeaderOfInput, UserUncheckedCreateWithoutTeamLeaderOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamLeaderOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamLeaderOfInput, UserUncheckedUpdateWithoutTeamLeaderOfInput>
  }

  export type UserUpdateWithoutTeamLeaderOfInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamLeaderOfInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutTeamsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    mobileNumber?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    courseName?: StringNullableListFilter<"User">
    about?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isTeamLeader?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    twitter?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    hashnode?: StringNullableFilter<"User"> | string | null
    peerlist?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    designation?: EnumDesignationNullableFilter<"User"> | $Enums.Designation | null
  }

  export type TagUpsertWithWhereUniqueWithoutTeamsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutTeamsInput, TagUncheckedUpdateWithoutTeamsInput>
    create: XOR<TagCreateWithoutTeamsInput, TagUncheckedCreateWithoutTeamsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutTeamsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutTeamsInput, TagUncheckedUpdateWithoutTeamsInput>
  }

  export type TagUpdateManyWithWhereWithoutTeamsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutTeamsInput>
  }

  export type TeamsEditLogUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamsEditLogWhereUniqueInput
    update: XOR<TeamsEditLogUpdateWithoutTeamInput, TeamsEditLogUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamsEditLogCreateWithoutTeamInput, TeamsEditLogUncheckedCreateWithoutTeamInput>
  }

  export type TeamsEditLogUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamsEditLogWhereUniqueInput
    data: XOR<TeamsEditLogUpdateWithoutTeamInput, TeamsEditLogUncheckedUpdateWithoutTeamInput>
  }

  export type TeamsEditLogUpdateManyWithWhereWithoutTeamInput = {
    where: TeamsEditLogScalarWhereInput
    data: XOR<TeamsEditLogUpdateManyMutationInput, TeamsEditLogUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserRoleInTeamUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserRoleInTeamWhereUniqueInput
    update: XOR<UserRoleInTeamUpdateWithoutTeamInput, UserRoleInTeamUncheckedUpdateWithoutTeamInput>
    create: XOR<UserRoleInTeamCreateWithoutTeamInput, UserRoleInTeamUncheckedCreateWithoutTeamInput>
  }

  export type UserRoleInTeamUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserRoleInTeamWhereUniqueInput
    data: XOR<UserRoleInTeamUpdateWithoutTeamInput, UserRoleInTeamUncheckedUpdateWithoutTeamInput>
  }

  export type UserRoleInTeamUpdateManyWithWhereWithoutTeamInput = {
    where: UserRoleInTeamScalarWhereInput
    data: XOR<UserRoleInTeamUpdateManyMutationInput, UserRoleInTeamUncheckedUpdateManyWithoutTeamInput>
  }

  export type ActiveInvitationOrRequestUpsertWithWhereUniqueWithoutTeamInput = {
    where: ActiveInvitationOrRequestWhereUniqueInput
    update: XOR<ActiveInvitationOrRequestUpdateWithoutTeamInput, ActiveInvitationOrRequestUncheckedUpdateWithoutTeamInput>
    create: XOR<ActiveInvitationOrRequestCreateWithoutTeamInput, ActiveInvitationOrRequestUncheckedCreateWithoutTeamInput>
  }

  export type ActiveInvitationOrRequestUpdateWithWhereUniqueWithoutTeamInput = {
    where: ActiveInvitationOrRequestWhereUniqueInput
    data: XOR<ActiveInvitationOrRequestUpdateWithoutTeamInput, ActiveInvitationOrRequestUncheckedUpdateWithoutTeamInput>
  }

  export type ActiveInvitationOrRequestUpdateManyWithWhereWithoutTeamInput = {
    where: ActiveInvitationOrRequestScalarWhereInput
    data: XOR<ActiveInvitationOrRequestUpdateManyMutationInput, ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutTeamInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutTeamInput, ChatUncheckedUpdateWithoutTeamInput>
    create: XOR<ChatCreateWithoutTeamInput, ChatUncheckedCreateWithoutTeamInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutTeamInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutTeamInput, ChatUncheckedUpdateWithoutTeamInput>
  }

  export type ChatUpdateManyWithWhereWithoutTeamInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutTeamInput>
  }

  export type NoticeUpsertWithWhereUniqueWithoutTeamInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutTeamInput, NoticeUncheckedUpdateWithoutTeamInput>
    create: XOR<NoticeCreateWithoutTeamInput, NoticeUncheckedCreateWithoutTeamInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutTeamInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutTeamInput, NoticeUncheckedUpdateWithoutTeamInput>
  }

  export type NoticeUpdateManyWithWhereWithoutTeamInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutUserRoleInTeamInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUserRoleInTeamInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUserRoleInTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInTeamInput, UserUncheckedCreateWithoutUserRoleInTeamInput>
  }

  export type TeamsCreateWithoutUserRoleInTeamInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutUserRoleInTeamInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutUserRoleInTeamInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutUserRoleInTeamInput, TeamsUncheckedCreateWithoutUserRoleInTeamInput>
  }

  export type UserUpsertWithoutUserRoleInTeamInput = {
    update: XOR<UserUpdateWithoutUserRoleInTeamInput, UserUncheckedUpdateWithoutUserRoleInTeamInput>
    create: XOR<UserCreateWithoutUserRoleInTeamInput, UserUncheckedCreateWithoutUserRoleInTeamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRoleInTeamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRoleInTeamInput, UserUncheckedUpdateWithoutUserRoleInTeamInput>
  }

  export type UserUpdateWithoutUserRoleInTeamInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInTeamInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TeamsUpsertWithoutUserRoleInTeamInput = {
    update: XOR<TeamsUpdateWithoutUserRoleInTeamInput, TeamsUncheckedUpdateWithoutUserRoleInTeamInput>
    create: XOR<TeamsCreateWithoutUserRoleInTeamInput, TeamsUncheckedCreateWithoutUserRoleInTeamInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutUserRoleInTeamInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutUserRoleInTeamInput, TeamsUncheckedUpdateWithoutUserRoleInTeamInput>
  }

  export type TeamsUpdateWithoutUserRoleInTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutUserRoleInTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateWithoutTagsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutTagsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutTagsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutTagsInput, TeamsUncheckedCreateWithoutTagsInput>
  }

  export type UserCreateWithoutTagsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type TeamsUpsertWithWhereUniqueWithoutTagsInput = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutTagsInput, TeamsUncheckedUpdateWithoutTagsInput>
    create: XOR<TeamsCreateWithoutTagsInput, TeamsUncheckedCreateWithoutTagsInput>
  }

  export type TeamsUpdateWithWhereUniqueWithoutTagsInput = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutTagsInput, TeamsUncheckedUpdateWithoutTagsInput>
  }

  export type TeamsUpdateManyWithWhereWithoutTagsInput = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTagsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTagsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateManyWithWhereWithoutTagsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTagsInput>
  }

  export type TeamsCreateWithoutLogsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutLogsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutLogsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutLogsInput, TeamsUncheckedCreateWithoutLogsInput>
  }

  export type UserCreateWithoutTeamsEditLogInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTeamsEditLogInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTeamsEditLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsEditLogInput, UserUncheckedCreateWithoutTeamsEditLogInput>
  }

  export type TeamsUpsertWithoutLogsInput = {
    update: XOR<TeamsUpdateWithoutLogsInput, TeamsUncheckedUpdateWithoutLogsInput>
    create: XOR<TeamsCreateWithoutLogsInput, TeamsUncheckedCreateWithoutLogsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutLogsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutLogsInput, TeamsUncheckedUpdateWithoutLogsInput>
  }

  export type TeamsUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamsEditLogInput = {
    update: XOR<UserUpdateWithoutTeamsEditLogInput, UserUncheckedUpdateWithoutTeamsEditLogInput>
    create: XOR<UserCreateWithoutTeamsEditLogInput, UserUncheckedCreateWithoutTeamsEditLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsEditLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsEditLogInput, UserUncheckedUpdateWithoutTeamsEditLogInput>
  }

  export type UserUpdateWithoutTeamsEditLogInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsEditLogInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TeamsCreateWithoutActiveRequestsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutActiveRequestsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutActiveRequestsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutActiveRequestsInput, TeamsUncheckedCreateWithoutActiveRequestsInput>
  }

  export type UserCreateWithoutActiveRequestsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActiveRequestsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActiveRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActiveRequestsInput, UserUncheckedCreateWithoutActiveRequestsInput>
  }

  export type TeamsUpsertWithoutActiveRequestsInput = {
    update: XOR<TeamsUpdateWithoutActiveRequestsInput, TeamsUncheckedUpdateWithoutActiveRequestsInput>
    create: XOR<TeamsCreateWithoutActiveRequestsInput, TeamsUncheckedCreateWithoutActiveRequestsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutActiveRequestsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutActiveRequestsInput, TeamsUncheckedUpdateWithoutActiveRequestsInput>
  }

  export type TeamsUpdateWithoutActiveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutActiveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutActiveRequestsInput = {
    update: XOR<UserUpdateWithoutActiveRequestsInput, UserUncheckedUpdateWithoutActiveRequestsInput>
    create: XOR<UserCreateWithoutActiveRequestsInput, UserUncheckedCreateWithoutActiveRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActiveRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActiveRequestsInput, UserUncheckedUpdateWithoutActiveRequestsInput>
  }

  export type UserUpdateWithoutActiveRequestsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActiveRequestsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutNoticesInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutNoticesInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutNoticesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
  }

  export type TeamsCreateWithoutNoticesInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    chats?: ChatCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutNoticesInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    chats?: ChatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutNoticesInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutNoticesInput, TeamsUncheckedCreateWithoutNoticesInput>
  }

  export type NoticeHistoryCreateWithoutNoticeInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutNoticeHistoryInput
  }

  export type NoticeHistoryUncheckedCreateWithoutNoticeInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdById: string
    createdAt?: Date | string
  }

  export type NoticeHistoryCreateOrConnectWithoutNoticeInput = {
    where: NoticeHistoryWhereUniqueInput
    create: XOR<NoticeHistoryCreateWithoutNoticeInput, NoticeHistoryUncheckedCreateWithoutNoticeInput>
  }

  export type NoticeHistoryCreateManyNoticeInputEnvelope = {
    data: NoticeHistoryCreateManyNoticeInput | NoticeHistoryCreateManyNoticeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNoticesInput = {
    update: XOR<UserUpdateWithoutNoticesInput, UserUncheckedUpdateWithoutNoticesInput>
    create: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNoticesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNoticesInput, UserUncheckedUpdateWithoutNoticesInput>
  }

  export type UserUpdateWithoutNoticesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNoticesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TeamsUpsertWithoutNoticesInput = {
    update: XOR<TeamsUpdateWithoutNoticesInput, TeamsUncheckedUpdateWithoutNoticesInput>
    create: XOR<TeamsCreateWithoutNoticesInput, TeamsUncheckedCreateWithoutNoticesInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutNoticesInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutNoticesInput, TeamsUncheckedUpdateWithoutNoticesInput>
  }

  export type TeamsUpdateWithoutNoticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutNoticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type NoticeHistoryUpsertWithWhereUniqueWithoutNoticeInput = {
    where: NoticeHistoryWhereUniqueInput
    update: XOR<NoticeHistoryUpdateWithoutNoticeInput, NoticeHistoryUncheckedUpdateWithoutNoticeInput>
    create: XOR<NoticeHistoryCreateWithoutNoticeInput, NoticeHistoryUncheckedCreateWithoutNoticeInput>
  }

  export type NoticeHistoryUpdateWithWhereUniqueWithoutNoticeInput = {
    where: NoticeHistoryWhereUniqueInput
    data: XOR<NoticeHistoryUpdateWithoutNoticeInput, NoticeHistoryUncheckedUpdateWithoutNoticeInput>
  }

  export type NoticeHistoryUpdateManyWithWhereWithoutNoticeInput = {
    where: NoticeHistoryScalarWhereInput
    data: XOR<NoticeHistoryUpdateManyMutationInput, NoticeHistoryUncheckedUpdateManyWithoutNoticeInput>
  }

  export type NoticeCreateWithoutHistoryInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutNoticesInput
    team: TeamsCreateNestedOneWithoutNoticesInput
  }

  export type NoticeUncheckedCreateWithoutHistoryInput = {
    id?: string
    title: string
    content: string
    createdById: string
    teamId: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeCreateOrConnectWithoutHistoryInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutHistoryInput, NoticeUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutNoticeHistoryInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutNoticeHistoryInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutNoticeHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoticeHistoryInput, UserUncheckedCreateWithoutNoticeHistoryInput>
  }

  export type NoticeUpsertWithoutHistoryInput = {
    update: XOR<NoticeUpdateWithoutHistoryInput, NoticeUncheckedUpdateWithoutHistoryInput>
    create: XOR<NoticeCreateWithoutHistoryInput, NoticeUncheckedCreateWithoutHistoryInput>
    where?: NoticeWhereInput
  }

  export type NoticeUpdateToOneWithWhereWithoutHistoryInput = {
    where?: NoticeWhereInput
    data: XOR<NoticeUpdateWithoutHistoryInput, NoticeUncheckedUpdateWithoutHistoryInput>
  }

  export type NoticeUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutNoticesNestedInput
    team?: TeamsUpdateOneRequiredWithoutNoticesNestedInput
  }

  export type NoticeUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNoticeHistoryInput = {
    update: XOR<UserUpdateWithoutNoticeHistoryInput, UserUncheckedUpdateWithoutNoticeHistoryInput>
    create: XOR<UserCreateWithoutNoticeHistoryInput, UserUncheckedCreateWithoutNoticeHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNoticeHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNoticeHistoryInput, UserUncheckedUpdateWithoutNoticeHistoryInput>
  }

  export type UserUpdateWithoutNoticeHistoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNoticeHistoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TeamsCreateWithoutChatsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teamLeader: UserCreateNestedOneWithoutTeamLeaderOfInput
    members?: UserCreateNestedManyWithoutTeamsInput
    tags?: TagCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutTeamInput
    notices?: NoticeCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutChatsInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    teamLeaderId: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    tags?: TagUncheckedCreateNestedManyWithoutTeamsInput
    logs?: TeamsEditLogUncheckedCreateNestedManyWithoutTeamInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutTeamInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutTeamInput
    notices?: NoticeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutChatsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutChatsInput, TeamsUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutChatsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type TeamsUpsertWithoutChatsInput = {
    update: XOR<TeamsUpdateWithoutChatsInput, TeamsUncheckedUpdateWithoutChatsInput>
    create: XOR<TeamsCreateWithoutChatsInput, TeamsUncheckedCreateWithoutChatsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutChatsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutChatsInput, TeamsUncheckedUpdateWithoutChatsInput>
  }

  export type TeamsUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatsInput>
  }

  export type UserCreateWithoutMessagesInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutMembersInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    username: string
    password: string
    courseName?: UserCreatecourseNameInput | string[]
    about: string
    role?: string
    isTeamLeader?: boolean
    isActive?: boolean
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    hashnode?: string | null
    peerlist?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    designation?: $Enums.Designation | null
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput
    teamLeaderOf?: TeamsUncheckedCreateNestedManyWithoutTeamLeaderInput
    teams?: TeamsUncheckedCreateNestedManyWithoutMembersInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedCreateNestedManyWithoutMemberInput
    TeamsEditLog?: TeamsEditLogUncheckedCreateNestedManyWithoutUserInput
    userRoleInTeam?: UserRoleInTeamUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutMembersInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    noticeHistory?: NoticeHistoryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    title: string
    about: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutChatsInput
    members?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    about: string
    teamId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutChatsNestedInput
    members?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type TeamsCreateManyTeamLeaderInput = {
    id?: string
    uniqueTitle: string
    title: string
    about: string
    isActive?: boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActiveInvitationOrRequestCreateManyMemberInput = {
    id?: string
    teamId: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsEditLogCreateManyUserInput = {
    id?: string
    requestId?: string | null
    teamId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleInTeamCreateManyUserInput = {
    id?: string
    teamId: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyUserInput = {
    id?: string
    chatId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeCreateManyCreatedByInput = {
    id?: string
    title: string
    content: string
    teamId: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeHistoryCreateManyCreatedByInput = {
    id?: string
    noticeId: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
  }

  export type TagUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamsUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsUpdateWithoutTeamLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutTeamsNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutTeamLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateManyWithoutTeamLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    tags?: TagUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutActiveRequestsNestedInput
  }

  export type ActiveInvitationOrRequestUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsEditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutLogsNestedInput
  }

  export type TeamsEditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsEditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutUserRoleInTeamNestedInput
  }

  export type UserRoleInTeamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutNoticesNestedInput
    history?: NoticeHistoryUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: NoticeHistoryUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeHistoryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notice?: NoticeUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type NoticeHistoryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    noticeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeHistoryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    noticeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsEditLogCreateManyTeamInput = {
    id?: string
    requestId?: string | null
    userId: string
    action: $Enums.Action
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleInTeamCreateManyTeamInput = {
    id?: string
    userId: string
    designation: $Enums.Designation
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActiveInvitationOrRequestCreateManyTeamInput = {
    id?: string
    memberId: string
    designation: $Enums.Designation
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyTeamInput = {
    id?: string
    title: string
    about: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeCreateManyTeamInput = {
    id?: string
    title: string
    content: string
    createdById: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTeamsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
  }

  export type TagUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsEditLogUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamsEditLogNestedInput
  }

  export type TeamsEditLogUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsEditLogUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRoleInTeamNestedInput
  }

  export type UserRoleInTeamUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleInTeamUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: UserUpdateOneRequiredWithoutActiveRequestsNestedInput
  }

  export type ActiveInvitationOrRequestUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    designation?: EnumDesignationFieldUpdateOperationsInput | $Enums.Designation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    members?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    members?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutNoticesNestedInput
    history?: NoticeHistoryUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: NoticeHistoryUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamLeader?: UserUpdateOneRequiredWithoutTeamLeaderOfNestedInput
    members?: UserUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutTeamNestedInput
    chats?: ChatUpdateManyWithoutTeamNestedInput
    notices?: NoticeUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    logs?: TeamsEditLogUncheckedUpdateManyWithoutTeamNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutTeamNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutTeamNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTeamNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueTitle?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    teamLeaderId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTagsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutMembersNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTagsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
  }

  export type NoticeHistoryCreateManyNoticeInput = {
    id?: string
    title: string
    content: string
    startDate: Date | string
    endDate: Date | string
    status: $Enums.Status
    createdById: string
    createdAt?: Date | string
  }

  export type NoticeHistoryUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutNoticeHistoryNestedInput
  }

  export type NoticeHistoryUncheckedUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeHistoryUncheckedUpdateManyWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutChatsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
    tags?: TagUncheckedUpdateManyWithoutUsersNestedInput
    teamLeaderOf?: TeamsUncheckedUpdateManyWithoutTeamLeaderNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutMembersNestedInput
    ActiveRequests?: ActiveInvitationOrRequestUncheckedUpdateManyWithoutMemberNestedInput
    TeamsEditLog?: TeamsEditLogUncheckedUpdateManyWithoutUserNestedInput
    userRoleInTeam?: UserRoleInTeamUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    noticeHistory?: NoticeHistoryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    courseName?: UserUpdatecourseNameInput | string[]
    about?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    hashnode?: NullableStringFieldUpdateOperationsInput | string | null
    peerlist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: NullableEnumDesignationFieldUpdateOperationsInput | $Enums.Designation | null
  }



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