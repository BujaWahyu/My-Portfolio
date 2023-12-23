import javax.swing.JOptionPane;
class procedure{
	
		public static void main(String[] args){

		String sBil = JOptionPane.showInputDialog(null,"Masukan Bilangan Bulat : ");

		int bil= Integer.parseInt(sBil);
		setCekBilangan(bil);

	}

		static void setCekBilangan(int b){

		if ((b % 2) == 0) {

		JOptionPane.showMessageDialog(null,"Bilangan yang anda masukan adalah bilangan genap","Hasil");

		}
		else{

		JOptionPane.showMessageDialog(null,"Bilangan yang anda masukan adalah bilangan ganjil","Hasil");

		}
	}
}