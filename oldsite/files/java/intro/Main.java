import java.util.Random;

public class Main {
	Random r=new Random();
	
	public static void main(String[] args){
		new Main("Alex is awesome");
		new Main("Come to computer club");
		new Window("Hello world","Hi, I do stuff.");
	}
	
	public Main(String words){
		sayStuff(sentence());
		arrayStuff(r.nextInt(3));
		System.out.println(words);
	}
	public void sayStuff(String stuff){
		System.out.println(stuff);
	}
	public String sentence(){
		return "Hello world!";
	}
	public void arrayStuff(int index){
		String[] stuff={"Hello","Bye","Cool"};
		System.out.println(stuff[index]);
	}
}
