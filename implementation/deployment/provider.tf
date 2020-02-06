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


provider "docker" {
  host = "ssh://waqas@202.45.128.184"
}
