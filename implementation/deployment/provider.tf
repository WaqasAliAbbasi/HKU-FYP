variable "docker_image" {
  default = "waqasali/fyp-stock"
}

variable "stock_port" {
  default = 50051
}
variable "alpr1_port" {
  default = 50052
}

variable "yolo1_port" {
  default = 50053
}

variable "yolo2_port" {
  default = 50054
}

variable "yolo3_port" {
  default = 50055
}

variable "yolo4_port" {
  default = 50056
}

variable "yolo5_port" {
  default = 50057
}

variable "yolo6_port" {
  default = 50058
}

variable "yolo7_port" {
  default = 50059
}

variable "yolo8_port" {
  default = 50060
}

variable "yolo9_port" {
  default = 50061
}

variable "yolo10_port" {
  default = 50062
}


provider "docker" {
  host = "ssh://waqas@202.45.128.185"
}
