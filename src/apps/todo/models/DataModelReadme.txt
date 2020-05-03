Für die TodoApp führe ich drei Objekte ein:

TodoApp -> Hat eine User-ID, welche der Firebase-ID entspricht. In Zukunft, wenn ich  Reference auf den App-übergreifenden globalen User in der DatenbankInstanz
TodoList
Todo

TodoApp -> Hat eine User-ID, welche der Firebase-ID entspricht.
    In Zukunft, wenn ich das User-Management über meine Datenbank mache, werde ich im TodoApp-Objekt eine
    Reference auf den App-übergreifenden globalen User in der DatenbankInstanz speichern.
    Darüber hinaus werdenn hier die Todo-App Settings gespeichert.
    Auch ist hier ein Array

TodoList -> Entspricht eine Liste von Todos, z.B. für einen Tag im Calender oder einer Custom-Liste. Hält eine Referenz auf die TodoApp.
    Die TodoList wird nicht embedded, da die meißten Changes sich innerhalb der Liste abbilden und kein Zugriff auf das 
    TodoApp Objekt nötig ist. 


Das Objekt im Redux-Store, sollte genauso aufgebaut sein wie i nder DB, so dass ich keine zwei Objekte identisch anpassen muss,
sondern einfach das Objekt im REdux-Store anpassen und dann 1zu1 in die DB schreibe. Ich schreibe also keine TODO,
 sondern immer die TODO-Listen


 ALLES ÜBER DEN HAUFEN....ich probiere erstmal einfach immer die ganzen APP-Daten zu laden und bei jeder Änderung weg zu speichern