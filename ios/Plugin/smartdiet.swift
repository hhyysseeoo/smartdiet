import Foundation

@objc public class smartdiet: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
