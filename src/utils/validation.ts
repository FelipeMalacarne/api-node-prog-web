export const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
}

export const validateCPF = (cpf: string): boolean => {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}
