using System;

public class HelloDll
{
    public static void Main(string[] args)
    {
        var me = new HelloDll();
        Console.WriteLine (me.Hello());
    }

    public string Hello()
    {
        return "Hello from DLL";
    }
}