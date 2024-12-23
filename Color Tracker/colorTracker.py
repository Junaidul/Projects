import cv2
from PIL import Image
from function import get_limits

color_dict = {
    "red": (0, 0, 255),
    "green": (0, 255, 0),
    "blue": (255, 0, 0),
    "white": (255, 255, 255),
    "black": (0, 0, 0),
    "yellow": (0, 255, 255),
    "pink": (203 , 192 , 255),
}

num = int(input("How many colors do you want to track (1 - 6)? "))
colors = []
for _ in range(num):
        user_color = input("Enter a color: ")
        colors.append(user_color)

cam = cv2.VideoCapture(0)

while True:
    ret , video_cam = cam.read()
    hsv_cam = cv2.cvtColor(video_cam , cv2.COLOR_BGR2HSV)
    
    for color in colors:
        lowerLimit, upperLimit = get_limits(color_dict[color])
        mask = cv2.inRange(hsv_cam , lowerLimit, upperLimit)

        convert_mask = Image.fromarray(mask)

        box = convert_mask.getbbox()

        if box is not None:
            x1 , y1 , x2 , y2 = box
            video_cam = cv2.rectangle(video_cam , (x1 , y1) , (x2 ,y2) , (0 ,0 ,0) , 5)
    cv2.imshow('cam' , video_cam)

    if cv2.waitKey(40) & 0xFF == ord('q'):
        break

cam.release()
cv2.destroyAllWindows()
