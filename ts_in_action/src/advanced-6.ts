interface Obj {
    a: number;
    b: string;
    c: boolean;
}

type ReadonlyObj = Readonly<Obj>;

type PartialObj = Partial<Obj>;

type PickObj = Pick<Obj, "a" | "b">;

type RecordObj = Record<"x" | "y" | "z", Obj>;