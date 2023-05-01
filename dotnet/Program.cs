using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;

public class HelloDll
{

    internal List<String> _items = new List<String>();
    public ReadOnlyCollection<String> items
    {
        get
        {
            return new ReadOnlyCollection<String>(_items);
        }
    }
    
    public static void Main(string[] args)
    {
        var me = new HelloDll();
        Console.WriteLine (me.Hello());
    }

    public string Hello()
    {
        return "Hello from DLL";
    }

    public void AddItem(string item)
    {
        _items.Add(item);
    }
    
    public string ItemString()
    {
        return string.Join(",", items.ToArray());
    }
}