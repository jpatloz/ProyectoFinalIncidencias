export interface usuario{
    correo: string,
    contraseña: string,
    roles: Roles
}   

export interface Roles{
    administrador: boolean,
    empleado: boolean,
    usuario: boolean
}