# fullstory-fps

Frame drop debugging example application

Steps to run:
1. Set FSOrgId in `ios/fullstoryfps/Info.plist`
2. `$ yarn`
3. `$ (cd ios && pod install)`
4. Run in Xcode

You should see a scrollable FlatList. When scrolling this list, you should notice a drop in frames occurring about twice a second.
