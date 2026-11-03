(() => {

    
    // Archivos a evaluar - Files to evaluate
    const fileList = [
        { id: 1, isFlagged: false },
        { id: 2, isFlagged: false },
        { id: 3, isFlagged: true },
        { id: 4, isFlagged: false },
        { id: 5, isFlagged: false },
        { id: 7, isFlagged: true },
    ]; 
    
    // Archivos marcados para borrar - Files to delete
    const filesToDelete = fileList.map( file => file.isFlagged );

    // Clases de ejemplo con nombres significativos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor: Nombres limpios sin prefijos o sufijos innecesarios
    class User { };
    interface UserProfile { };


        
    // Día de hoy - Today (Evita nombres confusos como ddmmyyyy que parecen strings)
    const currentDate = new Date();
    
    // Días transcurridos - Elapsed time in days (Evita variables de una sola letra como 'd')
    const elapsedDays: number = 45;
    
    // Número de archivos en un directorio - Number of files in directory (Evita abreviaturas ambiguas como 'dir')
    const fileCountInDirectory = 50;
    
    // Primer nombre - First name
    const firstName = 'Carlos';
    
    // Primer apellido - Last name
    const lastName = 'Gómez';

    // Días desde la última modificación - Days since modification (Evita acrónimos oscuros como 'dsm')
    const daysSinceLastModification = 7;
    
    // Cantidad máxima de clases por estudiante - Max classes per student (Evita nombres genéricos como 'max')
    const maxClassesPerStudent = 4;

})();