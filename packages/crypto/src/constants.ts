/** All supported key types */
export enum KeyType {
    ED25519 = 0,
    SECP256K1 = 1,
}

export enum KeySize {
    SECRET_KEY = 32,
    ED25519_PUBLIC_KEY = 32,
    SECP256k1_PUBLIC_KEY = 64,
}