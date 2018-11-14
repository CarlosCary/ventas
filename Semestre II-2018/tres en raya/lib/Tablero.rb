class Tablero
    @@fila1
    @@fila2
    @@fila3
    
    def jugada(jugador)
        if(jugador == "1") 
            return "X"
        else 
            return "O"
        end
    end

    def crearTablero
        @fila1 = Array.new(3)
        @fila2 = Array.new(3)
        @fila3 = Array.new(3)
    end
    def getCantidadDeJugadas
        
    end
end