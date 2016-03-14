# mobx-enzyme-test
A test case for testing react + mobx, using enzyme where a warning is thrown.

## Install

`npm i`

(may take a while)

## Usage

`npm test`

## Check the code

You will find both tests and components files in the `src` folder.

## Expected result

* Tests are passing
* mobx-react warnings

```
[mobx-react] Warning: A re-render was triggered before the component 'UserPassword#.0.render()', was mounted. Is (another) component trying to modify state in it's constructor / getInitialState? Use componentWillMount instead.
``
