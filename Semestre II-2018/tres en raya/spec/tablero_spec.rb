require "./lib/Tablero"

describe Tablero do
    
    before(:each) do
        @tablero = Tablero.new();
    end

    it "Deberia generar 'X' para una jugada" do
        expect(@tablero.jugada("1")).to eq "X";
    end

    it "Deberia generar 'X' para una jugada del jugador 1" do
        expect(@tablero.jugada("1")).to eq "X";
    end
    it "Deberia generar 'O' para una jugada del jugador 2" do
        expect(@tablero.jugada("2")).to eq "O";
    end
end