import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tunda',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final dbHelper = DatabaseHelper.instance;
  final String table = 'banana';

  void _insert() async {
    Map<String, dynamic> row = {
      'stocking_date': '2024-06-20',
      'status': 'ripe',
      'expected_expiry_date': '2024-06-27'
    };
    final id = await dbHelper.insert(table, row);
    print('inserted row id: $id');
  }

  void _query() async {
    final allRows = await dbHelper.queryAllRows(table);
    print('query all rows:');
    allRows.forEach(print);
  }

  void _update() async {
    Map<String, dynamic> row = {
      'id': 1,
      'stocking_date': '2024-06-22',
      'status': 'unripe',
      'expected_expiry_date': '2024-07-02'
    };
    final rowsAffected = await dbHelper.update(table, row);
    print('updated $rowsAffected row(s)');
  }

  void _delete() async {
    final id = await dbHelper.delete(table, 1);
    print('deleted $id row(s)');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tunda'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: _insert,
              child: Text('Insert'),
            ),
            ElevatedButton(
              onPressed: _query,
              child: Text('Query'),
            ),
            ElevatedButton(
              onPressed: _update,
              child: Text('Update'),
            ),
            ElevatedButton(
              onPressed: _delete,
              child: Text('Delete'),
            ),
          ],
        ),
      ),
    );
  }
}