export interface Incidencias {
  documentId: string,
  data: {
  id: number,
  fecha: string,
  lugarIncidencia: string,
  descIncidencia: string,
  solucion: string,
  estado: string,
  revisada: boolean
  }
}
