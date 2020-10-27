# Object Literals

- Stores Key-Value pairs.
- Can contain strings, numbers, arrays, or other data types and functions.
- There can be arrays of Objects.
- 'this' is the keyword used to access keys in an Object from within a function stored in the same object.
  <br>
  e.g. -
  <pre>
  const wifey = {
      name: 'Sanika',
      pretty: 'Yes',
      smol: 'Yes',
      best: 'No Doubt'
      sugoiCheck: function(){
          if this.best == 'No Doubt'{
              return 'yes';
          };
      }
  };
  </pre>