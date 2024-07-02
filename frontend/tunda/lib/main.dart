import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// Main entry point of the application
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tunda',
      home: MyHomePage(),
    );
  }
}

// Stateful widget to handle actions
class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  // Insert action placeholder
  void _insert() {
    print('Insert action');
    // Placeholder for the insert action
  }

  // Query action placeholder
  void _query() {
    print('Query action');
    // Placeholder for the query action
  }

  // Update action placeholder
  void _update() {
    print('Update action');
    // Placeholder for the update action
  }

  // Delete action placeholder
  void _delete() {
    print('Delete action');
    // Placeholder for the delete action
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
