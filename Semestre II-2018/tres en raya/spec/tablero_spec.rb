require "./lib/Tablero"

describe Romano do
    
    before(:each) do
        @tablero = Tablero.new();
    end

    it "Deberia generar 'X' para una jugada" do
        expect(@tablero.jugada()).to eq "X";
    end
end