import javax.swing.*;

public class Window extends JFrame{
	public Window(String title,String label){
		setVisible(true);
		setTitle(title);
		setSize(600,475);
		add(new JLabel(label));
	}
}
